import React from "react";
import {useNavigate} from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'

import loginApi from "../services/loginApi";
import {
  Form,
  FormButton,
  FormLabel,
  FormTextInput,
  FormAlert
} from "../Components/Form/index";

const Login = () => {
    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (formData) => {
      const email = formData.email;
      const password = formData.password;

      try {
          const response = await loginApi(email, password)
           await sessionStorage.setItem("token",response)
          await navigate("/home");
      } catch (error) {
        Swal.fire("Auth error, email or password its not valid")
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
  });
  return (
    <Form formik={formik}>
      <div>
        <FormLabel text="Email" />
        <FormTextInput
          type="text"
          placeholder="Email here..."
          name="email"
          formik={formik}
        />
        {formik.errors.email && formik.touched.email&&<FormAlert text={formik.errors.email}/>}
      </div>
      <div>
        <FormLabel text="Password" />
        <FormTextInput
          type="password"
          placeholder="Password here..."
          name="password"
          formik={formik}
        />
        {formik.errors.password && formik.touched.password&&<FormAlert text={formik.errors.password}/>}
      </div>
      <FormButton text="Login" />
    </Form>
  );
};

export default Login;
