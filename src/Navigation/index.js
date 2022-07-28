import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {useSelector} from "react-redux";
import Home from "../pages/Home";
import About from "../pages/About";
import BlogPost from "../pages/BlogPost";
import Contact from "../pages/Contact";
import Elements from "../pages/elements";
import Recipe from "../pages/Recipe";


const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/BlogPost" element={<BlogPost/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Elements" element={<Elements/>}/>
        <Route path="/Recipe" element={<Recipe/>}/>

      </Routes>
    </BrowserRouter>
  )
}
export default Navigation
