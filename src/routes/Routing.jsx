import React from "react";
import { BrowserRouter,Routes } from "react-router-dom";

const Routing = ({ children }) => {
  return (
  <BrowserRouter>
    <Routes>
        {children}
    </Routes>
  </BrowserRouter>
  );
};

export default Routing;
