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
    backgroundColor: "#f7f7f7",
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
    color: "#101828",
  }),

  // Стилі для вибраного значення
  singleValue: (base) => ({
    ...base,
    margin: 0,
    fontSize: "16px",
    fontWeight: 500,

    color: "#101828",
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
    // height: menuHeight,

    borderRadius: "12px",
    boxShadow: "0 4px 36px rgba(0,0,0,0.02)",
    marginTop: "4px",
    backgroundColor: "#fff",
    border: "1px solid #f7f7f7",
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
    color: state.isSelected ? "#101828" : "#8D929A",
    fontSize: "16px",
    lineHeight: 1.25,
    cursor: "pointer",
    ":last-of-type": {
      paddingBottom: 0,
    },

    ":hover": {
      backgroundColor: "transparent",
      color: "#101828",
    },

    ":active": {
      backgroundColor: "transparent",
    },
  }),
});
