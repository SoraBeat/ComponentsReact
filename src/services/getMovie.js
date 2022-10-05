import axios from "axios";

const getMovie = async (movieID) => {
  const res = await axios.get(
    process.env.REACT_APP_API_ENDPOINT +
      "movie/" +
      movieID +
      "?api_key=" +
      process.env.REACT_APP_API_KEY
  );
  return await res.data;
};

export default getMovie;
