import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import loginApi from "../services/loginApi";
import {
  FormLabel,
  FormTextInput,
  FormAlert,
  FormSubmit,
} from "../Components/Form/index";

const Login = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (formData) => {
      const email = formData.email;
      const password = formData.password;

      try {
        const response = await loginApi(email, password);
        await sessionStorage.setItem("token", response);
        await navigate("/list");
      } catch (error) {
        Swal.fire("Auth error, email or password its not valid");
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
  });
  if (token) {
    Swal.fire("You alredy login");
    return <Navigate to="/list" />;
  } else
    return (
      <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-2 bg-secondary p-4 rounded shadow-lg col-md-4 col-sm-6 col-12"
        >
          <h1 className="text-white text-center">Movie API</h1>
          <FormLabel text="Email" />
          <FormTextInput
            type="text"
            placeholder="Email here..."
            name="email"
            formik={formik}
          />
          {formik.errors.email && formik.touched.email && (
            <FormAlert text={formik.errors.email} />
          )}
          <FormLabel text="Password" />
          <FormTextInput
            type="password"
            placeholder="Password here..."
            name="password"
            formik={formik}
          />
          {formik.errors.password && formik.touched.password && (
            <FormAlert text={formik.errors.password} />
          )}
          <FormSubmit text="Login" />
        </form>
      </div>
    );
};

export default Login;
