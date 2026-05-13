"use client";

import { SelectOption } from "@/types/select";
import Select from "react-select";

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
            onChange(option);
          }
        }}
        isSearchable={false}
        menuPlacement="auto"
        menuPortalTarget={document.body}
      />
    </div>
  );
}
