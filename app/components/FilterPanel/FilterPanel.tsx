"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getBrands } from "@/lib/brands";
import CustomSelect from "../CustomSelect/CustomSelect";
import { SelectOption } from "@/types/select";
import Button from "../Button/Button";

export default function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBrandValue = searchParams.get("brand") ?? "";
  const selectedPriceValue = searchParams.get("rentalPrice") ?? "";

  //----------- brand

  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  const defaultBrandOption: SelectOption = {
    value: "",
    label: "Choose a brand",
  };

  const brandOptions: SelectOption[] = [
    defaultBrandOption,

    ...(brands?.map((brandName: string) => ({
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

  const priceOptions: SelectOption[] = [
    defaultPriceOption,

    {
      value: "10",
      label: "10",
    },

    {
      value: "20",
      label: "20",
    },

    {
      value: "30",
      label: "30",
    },

    {
      value: "40",
      label: "40",
    },

    {
      value: "50",
      label: "50",
    },

    {
      value: "60",
      label: "60",
    },

    {
      value: "70",
      label: "70",
    },

    {
      value: "80",
      label: "80",
    },

    {
      value: "90",
      label: "90",
    },

    {
      value: "100",
      label: "100",
    },
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
