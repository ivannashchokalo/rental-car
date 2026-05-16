import { StylesConfig } from "react-select";
import { SelectOption } from "@/types/select";

export const customSelectStyles = (
  menuHeight = "272px",
  width = "204px",
): StylesConfig<SelectOption> => ({
  // Головний контейнер select (закритий select)
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

  // Контейнер для value / placeholder всередині select
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

  // Стилі для вибраного значення
  singleValue: (base) => ({
    ...base,
    margin: 0,

    fontSize: "16px",
    fontWeight: 500,

    color: "var(--color-primary-text)",
  }),

  // Вертикальна лінія біля стрілки
  indicatorSeparator: () => ({
    display: "none",
  }),

  // Контейнер для dropdown arrow
  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
  }),

  // Dropdown menu
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

  // Контейнер для списку options
  menuList: (base) => ({
    ...base,
    padding: 0,

    maxHeight: menuHeight,

    overflowY: "auto",
  }),

  // Один option у dropdown
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
