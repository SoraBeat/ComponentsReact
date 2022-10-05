import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getMovie from "../services/getMovie";
import Swal from "sweetalert2";

import Layout from "../Components/Layout/Layout";
import BackupImage from "../images/imageNotFound.jpg"

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const token = sessionStorage.getItem("token");
  const { movieID } = useParams();

  useEffect(() => {
    const getDataMovie = async () => {
      try {
        const response = await getMovie(movieID);
        await setMovie(response);
      } catch (error) {
        Swal.fire("Something go wrong :c");
      }
    };
    getDataMovie();
  }, []);

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return (
      <Layout>
        <div className="container d-flex mt-4 gap-4 flex-wrap flex-md-row flex-md-nowrap justify-content-center px-3 w-75">
          <div className="d-flex justify-content-center">
            <div
            className="rounded shadow-lg"
              style={{width:"300px",height:"450px",backgroundImage:"url("+process.env.REACT_APP_API_IMAGE+movie.poster_path+"),url("+BackupImage+")",backgroundSize:"cover",backgroundPosition:"center"}}
            />
          </div>
          <div>
            <div className="d-flex align-items-end gap-2">
              <h3>Title:</h3>
              <h5>{movie.original_title}</h5>
            </div>
            <div className="d-flex align-items-end gap-2">
              <h3>Tag line:</h3>
              <h5>{movie.tagline}</h5>
            </div>
            <div className="d-flex align-items-end gap-2">
              <h3>Relese date:</h3>
              <h5>{movie.release_date}</h5>
            </div>
            <div className="d-flex align-items-end gap-2 flex-wrap">
              <h3>Generes:</h3>
              {movie.genres?.map((genre, index) => (
                <h5 key={index}>{genre.name + ","}</h5>
              ))}
            </div>
            <div className="d-flex align-items-start gap-2">
              <h3>Overview:</h3>
              <h5>{movie.overview}</h5>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default MovieDetails;
