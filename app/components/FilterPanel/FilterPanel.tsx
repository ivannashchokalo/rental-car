"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import CustomSelect from "../CustomSelect/CustomSelect";
import { SelectOption } from "@/types/select";
import Button from "../Button/Button";
import { getFilters } from "@/lib/cars";

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBrandValue = searchParams.get("brand") ?? "";
  const selectedPriceValue = searchParams.get("rentalPrice") ?? "";

  //----------- brand

  const { data: filters } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  const defaultBrandOption: SelectOption = {
    value: "",
    label: "Choose a brand",
  };

  const brandOptions: SelectOption[] = [
    defaultBrandOption,

    ...(filters?.brands.map((brandName) => ({
      value: brandName,
      label: brandName,
    })) ?? []),
  ];

  const selectedBrandOption =
    brandOptions.find((option) => option.value === selectedBrandValue) ??
    defaultBrandOption;

  const handleBrandChange = (selectedOption: SelectOption) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedOption.value) {
      params.set("brand", selectedOption.value);
    } else {
      params.delete("brand");
    }

    router.push(`/catalog?${params.toString()}`);
  };

  //--------- price

  const defaultPriceOption: SelectOption = {
    value: "",
    label: "Choose a price",
  };

  const generatedPriceOptions: SelectOption[] = [];

  const minPrice = filters?.price.min ?? 0;
  const maxPrice = filters?.price.max ?? 0;

  for (let price = minPrice; price <= maxPrice; price += 10) {
    generatedPriceOptions.push({
      value: String(price),
      label: String(price),
    });
  }

  const priceOptions: SelectOption[] = [
    defaultPriceOption,
    ...generatedPriceOptions,
  ];

  const selectedPriceOption =
    priceOptions.find((option) => option.value === selectedPriceValue) ??
    defaultPriceOption;

  const handlePriceChange = (selectedOption: SelectOption) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedOption.value) {
      params.set("rentalPrice", selectedOption.value);
    } else {
      params.delete("rentalPrice");
    }
    router.push(`/catalog?${params.toString()}`);
  };

  //------- mileage

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const minMileage = formData.get("minMileage") as string;
    const maxMileage = formData.get("maxMileage") as string;
    const params = new URLSearchParams(searchParams.toString());

    if (minMileage) {
      params.set("minMileage", minMileage);
    } else {
      params.delete("minMileage");
    }

    if (maxMileage) {
      params.set("maxMileage", maxMileage);
    } else {
      params.delete("maxMileage");
    }

    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <>
      <CustomSelect
        options={brandOptions}
        value={selectedBrandOption}
        onChange={handleBrandChange}
        id="brand"
        label="Car brand"
      />
      <CustomSelect
        options={priceOptions}
        value={selectedPriceOption}
        onChange={handlePriceChange}
        id="price"
        label="Price/ 1 hour"
      />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Car mileage / km</legend>

          <label htmlFor="minMileage" className="visually-hidden">
            Minimum mileage
          </label>

          <input
            id="minMileage"
            name="minMileage"
            type="number"
            placeholder="From"
            defaultValue={searchParams.get("minMileage") ?? ""}
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
          />
        </fieldset>

        <Button type="submit" text="Search" variant="primary" />
      </form>
    </>
  );
}
