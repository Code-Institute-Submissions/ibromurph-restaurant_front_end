import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {useSelector} from "react-redux";
import Home from "../pages/Home";
import About from "../pages/About";
import MenuPage from "../pages/MenuPage";
import Contact from "../pages/Contact";
import Elements from "../pages/elements";
import Recipe from "../pages/Recipe";
import Reserve from "../pages/Booking/Reserve";

const Navigation = () => {
  return (
    <BrowserRouter>
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
  );
};
export default Navigation;
