import { StylesConfig } from "react-select";
import { SelectOption } from "@/types/select";

export const customSelectStyles = (
  menuHeight = "272px",
  width = "204px",
): StylesConfig<SelectOption> => ({
  control: (base) => ({
    ...base,
    width,
    height: "44px",

    border: "none",
    borderRadius: "12px",

    backgroundColor: "var(--color-white)",
    boxShadow: "none",

    padding: "12px 16px",

    cursor: "pointer",

    ":hover": {
      border: "none",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: 0,

    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 1.2,

    color: "var(--color-primary-text)",
  }),

  placeholder: (base) => ({
    ...base,
    margin: 0,

    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 1.25,

    color: "var(--color-primary-text)",
  }),

  singleValue: (base) => ({
    ...base,
    margin: 0,

    fontSize: "16px",
    fontWeight: 500,

    color: "var(--color-primary-text)",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
  }),

  menu: (base) => ({
    ...base,

    borderRadius: "12px",

    boxShadow: "0 4px 36px rgba(0,0,0,0.02)",

    marginTop: "4px",

    backgroundColor: "var(--color-white)",

    border: "1px solid var(--color-background-light)",

    padding: "14px 8px 14px 18px",

    overflow: "hidden",
  }),

  menuList: (base) => ({
    ...base,

    padding: 0,

    maxHeight: menuHeight,

    overflowY: "auto",

    scrollbarWidth: "thin",
    scrollbarColor: "var(--color-border-light) transparent",

    "&::-webkit-scrollbar": {
      width: 8,
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--color-border-light)",
      borderRadius: 999,

      border: "2px solid transparent",
      backgroundClip: "content-box",
    },
  }),

  option: (base, state) => ({
    ...base,

    padding: "0 0 8px",

    backgroundColor: "transparent",

    color: state.isSelected
      ? "var(--color-primary-text)"
      : "var(--color-secondary-text)",

    fontSize: "16px",
    lineHeight: 1.25,

    cursor: "pointer",

    ":last-of-type": {
      paddingBottom: 0,
    },

    ":hover": {
      backgroundColor: "transparent",
      color: "var(--color-primary-text)",
    },

    ":active": {
      backgroundColor: "transparent",
    },
  }),
});
