import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ShowMovies from "../Components/ShowMovies/ShowMovies";
import Swal from "sweetalert2";

import searchMovieName from "../services/searchMovieName";
import Layout from "../Components/Layout/Layout";

const List = () => {
  const [movies, setMovies] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await searchMovieName("a");
        await setMovies(response);
      } catch (error) {
        Swal.fire("Something go wrong :c");
      }
    };
    callData();
  }, [setMovies]);

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return (
      <Layout>
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
          <ShowMovies movies={movies} />
        </div>
      </Layout>
    );
  }
};

export default List;
