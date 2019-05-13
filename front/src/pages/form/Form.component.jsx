import React from "react";
import { Formik } from "formik";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import styles from "./Form.module.scss";

const BeerForm = ({ loading, createBeer }) => (
  <div className={styles.form}>
    <h2>Add a beer</h2>
    <Formik
      initialValues={{ name: "", ibu: "" }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.ibu) {
          errors.ibu = "Required";
        } else if (isNaN(parseInt(values.ibu, 10))) {
          errors.ibu = "IBU should be a number";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        createBeer(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Beer name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            valid={!errors.name}
          />
          <span className={styles.errorMessage}>
            {errors.name && touched.name && errors.name}
          </span>
          <Input
            type="ibu"
            name="ibu"
            placeholder="IBU"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ibu}
            valid={!errors.ibu}
          />
          <span className={styles.errorMessage}>
            {errors.ibu && touched.ibu && errors.ibu}
          </span>
          <div className={styles.submitButton}>
            <Button
              type="submit"
              disabled={errors.name || errors.ibu || isSubmitting}
              text="Create"
            />
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default BeerForm;
