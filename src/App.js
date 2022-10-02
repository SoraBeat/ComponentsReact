import {Route} from "react-router-dom"

import Routing from "./routes/Routing";
import Login from "./routes/Login";

function App() {
  return (
    <>
      <Routing>
          <Route path="/" element={<Login/>}/>
      </Routing>
    </>
  );
}

export default App;
