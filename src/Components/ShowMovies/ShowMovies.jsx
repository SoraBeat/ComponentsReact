import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../../redux/actions";
import { favListSelector } from "../../redux/selectors";

import BackupImage from "../../images/imageNotFound.jpg"

const ShowMovies = ({ movies }) => {
  const favListInStore = useSelector(favListSelector);
  const dispatch = useDispatch();

  const handleAddRemoveFav=(movie)=>{
    let alredyInFavList = false;
    favListInStore.map((item)=>{
      if(item.id===movie.id)
      alredyInFavList=true
    })
    if(!alredyInFavList){
      dispatch(addFav(movie))
    }else{
      dispatch(deleteFav(movie.id))
    }
  }

  if (movies.length===0) {
    return(
    <h1>No results</h1>
    )
  } else {
    return (
      <>
        {movies.map((movie) => {
          let alredyInFavList = false;
          favListInStore.map((item)=>{
            if(item.id===movie.id)
            alredyInFavList=true
          })
          return (
              <div className="card shadow-lg" key={movie.id} style={{width:"250px",height:"650px"}}>
                <div style={{backgroundImage:"url("+process.env.REACT_APP_API_IMAGE+movie.poster_path+"),url("+BackupImage+")",height:"55%",backgroundSize:"cover",backgroundPosition:"center"}} />
                <button className={alredyInFavList?"btn btn-success":"btn btn-secondary"} onClick={()=>handleAddRemoveFav(movie)}>❤️</button>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{movie.original_title}</h5>
                  <p className="card-text">
                    {movie.overview.substring(0,70)+"..."}
                  </p>
                  <Link to={`/movieDetails/${movie.id}`} className="btn btn-primary">
                    More details
                  </Link>
                </div>
              </div>
          );
        })}
      </>
    );
  }
};

export default ShowMovies;
