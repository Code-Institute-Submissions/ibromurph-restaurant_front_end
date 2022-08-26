import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MenuPage from "../pages/MenuPage";
import Contact from "../pages/Contact";
import Elements from "../pages/elements";
import Recipe from "../pages/Recipe";
import Reserve from "../pages/Booking/Reserve";
import {Fragment} from "react";
import Alerts from "../actions/Alerts/Alerts";
const Navigation = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Alerts/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Elements" element={<Elements />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </Fragment>

  );
};
export default Navigation;
