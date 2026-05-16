"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";
import clsx from "clsx";
import Button from "../Button/Button";
import { useMutation } from "@tanstack/react-query";
import { createBookingRequest } from "@/lib/cars";
import toast from "react-hot-toast";

interface FormValues {
  name: string;
  email: string;
  comment: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  comment: Yup.string().required("Comment is required"), // на макеті не видно, що обов'язковий, але бекенд вимагає
});

export default function BookingForm({ carId }: { carId: string }) {
  const fieldId = useId();

  const { mutate, isPending } = useMutation({
    mutationFn: createBookingRequest,

    onSuccess: (data) => {
      toast.dismiss();
      toast.success(data.message);
    },

    onError: () => {
      toast.dismiss();
      toast.error("Failed to create booking request");
    },
  });

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    mutate(
      {
        carId,
        name: values.name,
        email: values.email,
        comment: values.comment,
      },
      {
        onSuccess: () => {
          actions.resetForm();
        },
      },
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
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
              <label htmlFor={`${fieldId}-comment`} className="visually-hidden">
                Comment
              </label>

              <Field
                as="textarea"
                name="comment"
                id={`${fieldId}-comment`}
                rows={4}
                placeholder="Comment*"
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
            text={isPending ? "Submitting..." : "Send"}
            disabled={isPending}
            className={styles.button}
          />
        </Form>
      )}
    </Formik>
  );
}
