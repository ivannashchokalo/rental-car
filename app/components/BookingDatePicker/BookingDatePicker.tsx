"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField, useFormikContext } from "formik";
interface FormValues {
  date: Date | null;
}

export default function BookingDatePicker(id) {
  const [field] = useField("date");

  const { setFieldValue } = useFormikContext<FormValues>();

  return (
    <DatePicker
      selected={field.value}
      onChange={(date) => {
        setFieldValue("date", date);
      }}
      dateFormat="dd/MM/yyyy"
      placeholderText="Choose date"
      minDate={new Date()}
    />
  );
}
