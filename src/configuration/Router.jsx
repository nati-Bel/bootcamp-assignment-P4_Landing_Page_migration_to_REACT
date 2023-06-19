import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Description from "../pages/description/Description";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Description" element={<Description />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
