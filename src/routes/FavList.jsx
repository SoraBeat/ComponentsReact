import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { favListSelector } from "../redux/selectors";

import Layout from '../Components/Layout/Layout'
import ShowMovies from '../Components/ShowMovies/ShowMovies';

const FavList = () => {
    const favListInStore = useSelector(favListSelector);
    const token = sessionStorage.getItem("token");
if(!token){
  return(<Navigate to="/"/>)
}else{
  return (
    <Layout>
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            <ShowMovies movies={favListInStore}/>
        </div>
    </Layout>
  )}
}

export default FavList