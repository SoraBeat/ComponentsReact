import { Route } from "react-router-dom";

import Routing from "./routes/Routing";
import Login from "./routes/Login";
import List from "./routes/List";
import ListSeach from "./routes/ListSeach";
import MovieDetails from "./routes/MovieDetails";
import FavList from "./routes/FavList";

function App() {
  return (
    <>
      <Routing>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:movieName" element={<ListSeach />} />
        <Route path="/movieDetails/:movieID" element={<MovieDetails />} />
        <Route path="/favList" element={<FavList />} />
      </Routing>
    </>
  );
}

export default App;
