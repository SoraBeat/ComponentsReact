import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormTextInput from "../Form/formTextInput/FormTextInput";
import FormSubmit from "../Form/formSubmit/FormSubmit";
import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      movieName: "",
    },
    onSubmit: (formData) => {
      const movieName = formData.movieName;
      navigate("/list/"+movieName);
    },
    validationSchema: Yup.object({
      movieName: Yup.string().required("This field is void"),
    })
  });
  const handleLogout=()=>{
    sessionStorage.clear()
    navigate("/");
  }
  const handleError=()=>{
    if(formik.errors.movieName){
      Swal.fire(formik.errors.movieName)
    }
  }


  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <label className="navbar-brand">List of Movies</label>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favList">
                Fav list
              </Link>
            </li>
            <form onSubmit={formik.handleSubmit} className="d-flex gap-2">
              <FormTextInput type="text" placeholder="Name here" name="movieName" formik={formik}/>
              <FormSubmit doSomething={handleError} text={"Search"}/>
            </form>
            <li className="ms-auto">
              <button onClick={handleLogout} className="btn btn-danger">LOGOUT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
