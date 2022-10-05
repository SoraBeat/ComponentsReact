import React from "react";

const FormTextInput = ({ type, placeholder, name, formik }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={formik.handleChange}
      autoComplete="on"
      className="form-control"
    />
  );
};

export default FormTextInput;
