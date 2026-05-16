import { components, DropdownIndicatorProps } from "react-select";
import styles from "./CustomDropdownIndicator.module.css";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { SelectOption } from "@/types/select";

export default function CustomDropdownIndicator<
  IsMulti extends boolean = false,
>(props: DropdownIndicatorProps<SelectOption, IsMulti>) {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      <Icon
        name="arrow"
        className={clsx(styles.arrow, {
          [styles.open]: menuIsOpen,
        })}
      />
    </components.DropdownIndicator>
  );
}
