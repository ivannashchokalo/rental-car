"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";

import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import clsx from "clsx";
import Button from "../Button/Button";

interface FormValues {
  name: string;
  email: string;
  date: Date | null;
  comment: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().nullable(),
  comment: Yup.string(),
});

export default function BookingForm() {
  const fieldId = useId();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.inputsWrapper}>
            <div className={styles.inputWrapper}>
              <label htmlFor={`${fieldId}-name`} className="visually-hidden">
                Name
              </label>

              <Field
                type="text"
                name="name"
                id={`${fieldId}-name`}
                placeholder="Name*"
                className={clsx(
                  styles.input,
                  styles.inputCommon,
                  touched.name && errors.name && styles.inputError,
                )}
              />

              {touched.name && errors.name && (
                <p className={styles.errorText}>{errors.name}</p>
              )}
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor={`${fieldId}-email`} className="visually-hidden">
                Email
              </label>

              <Field
                type="email"
                name="email"
                id={`${fieldId}-email`}
                placeholder="Email*"
                className={clsx(
                  styles.input,
                  styles.inputCommon,
                  touched.email && errors.email && styles.inputError,
                )}
              />

              {touched.email && errors.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor={`${fieldId}-date`} className="visually-hidden">
                Booking date
              </label>

              <BookingDatePicker
                id={`${fieldId}-date`}
                className={clsx(
                  styles.input,
                  styles.inputCommon,
                  touched.date && errors.date && styles.inputError,
                )}
              />

              {touched.date && errors.date && (
                <p className={styles.errorText}>{errors.date}</p>
              )}
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor={`${fieldId}-comment`} className="visually-hidden">
                Comment
              </label>

              <Field
                as="textarea"
                name="comment"
                id={`${fieldId}-comment`}
                rows={4}
                placeholder="Comment"
                className={clsx(
                  styles.textarea,
                  styles.inputCommon,
                  touched.comment && errors.comment && styles.inputError,
                )}
              />

              {touched.comment && errors.comment && (
                <p className={styles.errorText}>{errors.comment}</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            text={isSubmitting ? "Submitting..." : "Send"}
            disabled={isSubmitting}
            className={styles.button}
          />
        </Form>
      )}
    </Formik>
  );
}
