"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import CustomSelect from "../CustomSelect/CustomSelect";
import { SelectOption } from "@/types/select";
import Button from "../Button/Button";
import { getFilters } from "@/lib/cars";
import styles from "./FilterPanel.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBrandValue = searchParams.get("brand") ?? "";
  const selectedPriceValue = searchParams.get("price") ?? "";
  const [brand, setBrand] = useState(selectedBrandValue);
  const [price, setPrice] = useState(selectedPriceValue);

  //----------- brand

  const { data: filters } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  const brandOptions: SelectOption[] = [
    ...(filters?.brands.map((brandName) => ({
      value: brandName,
      label: brandName,
    })) ?? []),
  ];

  const selectedBrandOption =
    brandOptions.find((option) => option.value === brand) ?? null;

  const handleBrandChange = (option: SelectOption) => {
    setBrand(option.value);
  };

  //--------- price

  const generatedPriceOptions: SelectOption[] = [];

  const minPrice = filters?.price.min ?? 0;
  const maxPrice = filters?.price.max ?? 0;

  for (let price = minPrice; price <= maxPrice; price += 10) {
    generatedPriceOptions.push({
      value: String(price),
      label: String(price),
    });
  }

  const priceOptions: SelectOption[] = [...generatedPriceOptions];

  const selectedPriceOption =
    priceOptions.find((option) => option.value === price) ?? null;

  const handlePriceChange = (option: SelectOption) => {
    setPrice(option.value);
  };

  //------- submit

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    const minMileage = formData.get("minMileage") as string;
    const maxMileage = formData.get("maxMileage") as string;

    if (maxMileage && !minMileage) {
      params.set("minMileage", "0");
    }

    if (brand) {
      params.set("brand", brand);
    }

    if (price) {
      params.set("price", price);
    }

    if (minMileage) {
      params.set("minMileage", minMileage);
    }

    if (maxMileage) {
      params.set("maxMileage", maxMileage);
    }

    router.push(`/catalog?${params.toString()}`);
  };

  const handleClearFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;

    form?.reset();

    setBrand("");
    setPrice("");

    router.push("/catalog");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formWrapper}>
          <div>
            <label htmlFor="brand" className={styles.label}>
              Car brand
            </label>

            <CustomSelect
              id="brand"
              options={brandOptions}
              value={selectedBrandOption}
              onChange={handleBrandChange}
              menuHeight="272px"
              controlWidth="204px"
              placeholder="Choose a brand"
            />
          </div>

          <div>
            <label htmlFor="price" className={styles.label}>
              Price / 1 hour
            </label>

            <CustomSelect
              id="price"
              options={priceOptions}
              value={selectedPriceOption}
              onChange={handlePriceChange}
              menuHeight="188px"
              controlWidth="196px"
              formatOptionLabel={(option, meta) => {
                if (meta.context === "value" && option.value) {
                  return `To $${option.label}`;
                }

                return option.label;
              }}
              placeholder="Choose a price"
            />
          </div>

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Car mileage / km</legend>

            <label htmlFor="minMileage" className="visually-hidden">
              Minimum mileage
            </label>

            <input
              id="minMileage"
              name="minMileage"
              type="number"
              placeholder="From"
              defaultValue={searchParams.get("minMileage") ?? ""}
              className={clsx(styles.input, styles.inputLeft)}
            />

            <label htmlFor="maxMileage" className="visually-hidden">
              Maximum mileage
            </label>

            <input
              id="maxMileage"
              name="maxMileage"
              type="number"
              placeholder="To"
              defaultValue={searchParams.get("maxMileage") ?? ""}
              className={clsx(styles.input, styles.inputRight)}
            />
          </fieldset>

          <Button
            type="submit"
            text="Search"
            variant="primary"
            className={styles.submitButton}
          />
        </div>
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClearFilters}
        >
          Clear filters
        </button>
      </form>
    </div>
  );
}
