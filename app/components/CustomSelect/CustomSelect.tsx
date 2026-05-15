"use client";

import dynamic from "next/dynamic";
import { SelectOption } from "@/types/select";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

interface CustomSelectProps {
  options: SelectOption[];
  value: SelectOption;
  onChange: (option: SelectOption) => void;
  label: string;
  id: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  label,
  id,
}: CustomSelectProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <Select
        inputId={id}
        options={options}
        value={value}
        onChange={(option) => {
          if (option) {
            onChange(option as SelectOption);
          }
        }}
        isSearchable={false}
        menuPlacement="auto"
        menuPortalTarget={document.body}
      />
    </div>
  );
}
