import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ShowMovies from "../Components/ShowMovies/ShowMovies";
import Swal from "sweetalert2";

import searchMovieName from "../services/searchMovieName";
import Layout from "../Components/Layout/Layout";

const ListSeach = () => {
  const [movies, setMovies] = useState([]);
  const token = sessionStorage.getItem("token");
  const { movieName } = useParams();

  useEffect(() => {
    const callData = async () => {
      try {
        const response = await searchMovieName(movieName);
        await setMovies(response);
      } catch (error) {
        Swal.fire("Something go wrong :c");
      }
    };
    callData();
  }, [movieName]);

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <Layout>
          <h1>You search: {movieName}</h1>
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            <ShowMovies movies={movies} />
          </div>
        </Layout>
      </>
    );
  }
};

export default ListSeach;
