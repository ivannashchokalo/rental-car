"use client";

import { SelectOption } from "@/types/select";
import Select, { FormatOptionLabelMeta } from "react-select";
import CustomDropdownIndicator from "../CustomDropdownIndicator/CustomDropdownIndicator";
import { customSelectStyles } from "./CustomSelect.styles";

interface CustomSelectProps {
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (option: SelectOption) => void;
  label?: string;
  id: string;
  formatOptionLabel?: (
    option: SelectOption,
    meta: FormatOptionLabelMeta<SelectOption>,
  ) => React.ReactNode;
  menuHeight: string;
  controlWidth: string;
  placeholder: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  id,
  formatOptionLabel,
  menuHeight,
  controlWidth,
  placeholder,
}: CustomSelectProps) {
  return (
    <Select<SelectOption>
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
      components={{
        DropdownIndicator: CustomDropdownIndicator,
      }}
      formatOptionLabel={formatOptionLabel}
      styles={customSelectStyles(menuHeight, controlWidth)}
      // menuPortalTarget={document.body}
      menuPosition="fixed"
      placeholder={placeholder}
    />
  );
}
