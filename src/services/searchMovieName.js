import axios from "axios";

const searchMovieName = async (movieName) => {
  const res = await axios.get(
    process.env.REACT_APP_API_ENDPOINT +
      "search/movie/?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&page=1&query=" +
      movieName
  );
  return await res.data.results;
};

export default searchMovieName;
