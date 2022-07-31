import {Fragment} from "react";
import logo from '../../assets/img/core-img/logo.png'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");
  return (
    <Fragment>
      {/* Search Wrapper */}
      <div className="search-wrapper">
        {/* Close Btn */}
        <div className="close-btn"><i className="fa fa-times" aria-hidden="true"/></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#" method="post">
                <input type="search" name="search" placeholder="Type any keywords..."/>
                <button type="submit"><i className="fa fa-search" aria-hidden="true"/></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Header Area Start ##### */}
      <header className="header-area">
        {/* Top Header Area */}
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              {/* Breaking News */}
              <div className="col-12 col-sm-6">
                <div className="breaking-news">
                  <div id="breakingNewsTicker" className="ticker">
                    <ul>
                      <li><a href="#">Hello World!</a></li>
                      <li><a href="#">Welcome to Colorlib Family.</a></li>
                      <li><a href="#">Hello Delicious!</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Top Social Info */}
              <div className="col-12 col-sm-6">
                <div className="top-social-info text-right">
                  <a href="#"><i className="fa fa-pinterest" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-dribbble" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-behance" aria-hidden="true"/></a>
                  <a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar Area */}
        <div className="delicious-main-menu">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              {/* Menu */}
              <nav className="classy-navbar justify-content-between" id="deliciousNav">
                {/* Logo */}
                <Link className="nav-brand" to="/"><img src={logo} alt=""/></Link>
                {/* Navbar Toggler */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span/><span/><span/></span>
                </div>
                {/* Menu */}
                <div className="classy-menu">
                  {/* close btn */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap"><span className="top"/><span className="bottom"/></div>
                  </div>
                  {/* Nav Start */}
                  <div className="classynav">
                    <ul>
                      <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/">Home</Link></li>
                      <li className={splitLocation[1] === "About" ? "active" : ""}><Link to="/About">About Us</Link>
                      </li>
                      <li className={splitLocation[1] === "BlogPost" ? "active" : ""}><Link to="/BlogPost">Blog
                        Post</Link></li>
                      <li className={splitLocation[1] === "Recipe" ? "active" : ""}><Link to="/Recipe">Recipe
                        Post</Link></li>
                      <li className={splitLocation[1] === "Contact" ? "active" : ""}><Link to="/Contact">Contact</Link>
                      </li>
                      <li className={splitLocation[1] === "Elements" ? "active" : ""}><Link
                        to="/Elements">Elements</Link></li>
                      <li className={splitLocation[1] === "Reserve" ? "active" : ""}><Link
                        to="/Reserve">Reserve</Link></li>
                      {/*<li><Link to="#">Pages</Link>*/}
                      {/*  <ul className="dropdown">*/}
                      {/*    <li><Link to="/">Home</Link></li>*/}
                      {/*    <li><Link to="/About">About Us</Link></li>*/}
                      {/*    <li><a href="/BlogPost">Blog Post</a></li>*/}
                      {/*    <li><a href="/Recipe">Recipe Post</a></li>*/}
                      {/*    <li><a href="/Contact">Contact</a></li>*/}
                      {/*    <li><a href="/Elements">Elements</a></li>*/}
                      {/*    <li><a href="#">Dropdown</a>*/}
                      {/*      <ul className="dropdown">*/}
                      {/*        <li><a href="index.html">Home</a></li>*/}
                      {/*        <li><a href="/About">About Us</a></li>*/}
                      {/*        <li><a href="/BlogPost">Blog Post</a></li>*/}
                      {/*        <li><a href="/Recipe">Recipe Post</a></li>*/}
                      {/*        <li><a href="/Contact">Contact</a></li>*/}
                      {/*        <li><a href="/Elements">Elements</a></li>*/}
                      {/*        <li><a href="#">Dropdown</a>*/}
                      {/*          <ul className="dropdown">*/}
                      {/*            <li><a href="index.html">Home</a></li>*/}
                      {/*            <li><a href="/About">About Us</a></li>*/}
                      {/*            <li><a href="/BlogPost">Blog Post</a></li>*/}
                      {/*            <li><a href="/Recipe">Recipe Post</a></li>*/}
                      {/*            <li><a href="/Contact">Contact</a></li>*/}
                      {/*            <li><a href="/Elements">Elements</a></li>*/}
                      {/*          </ul>*/}
                      {/*        </li>*/}
                      {/*      </ul>*/}
                      {/*    </li>*/}
                      {/*  </ul>*/}
                      {/*</li>*/}
                      {/*<li><a href="#">Mega Menu</a>*/}
                      {/*  <div className="megamenu">*/}
                      {/*    <ul className="single-mega cn-col-4">*/}
                      {/*      <li className="title">Catagory</li>*/}
                      {/*      <li><a href="index.html">Home</a></li>*/}
                      {/*      <li><a href="/About">About Us</a></li>*/}
                      {/*      <li><a href="/BlogPost">Blog Post</a></li>*/}
                      {/*      <li><a href="/Recipe">Recipe Post</a></li>*/}
                      {/*      <li><a href="/Contact">Contact</a></li>*/}
                      {/*      <li><a href="/Elements">Elements</a></li>*/}
                      {/*    </ul>*/}
                      {/*    <ul className="single-mega cn-col-4">*/}
                      {/*      <li className="title">Catagory</li>*/}
                      {/*      <li><a href="index.html">Home</a></li>*/}
                      {/*      <li><a href="/About">About Us</a></li>*/}
                      {/*      <li><a href="/BlogPost">Blog Post</a></li>*/}
                      {/*      <li><a href="/Recipe">Recipe Post</a></li>*/}
                      {/*      <li><a href="/Contact">Contact</a></li>*/}
                      {/*      <li><a href="/Elements">Elements</a></li>*/}
                      {/*    </ul>*/}
                      {/*    <ul className="single-mega cn-col-4">*/}
                      {/*      <li className="title">Catagory</li>*/}
                      {/*      <li><a href="index.html">Home</a></li>*/}
                      {/*      <li><a href="/About">About Us</a></li>*/}
                      {/*      <li><a href="/BlogPost">Blog Post</a></li>*/}
                      {/*      <li><a href="/Recipe">Recipe Post</a></li>*/}
                      {/*      <li><a href="/Contact">Contact</a></li>*/}
                      {/*      <li><a href="/Elements">Elements</a></li>*/}
                      {/*    </ul>*/}
                      {/*    <div className="single-mega cn-col-4">*/}
                      {/*      <div className="receipe-slider owl-carousel">*/}
                      {/*        <a href="#"><img src={bg1} alt=""/></a>*/}
                      {/*        <a href="#"><img src={bg6} alt=""/></a>*/}
                      {/*      </div>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</li>*/}
                      {/*<li><a href="/Recipe">Recipes</a></li>*/}
                      {/*<li><a href="/Recipe">4 Vegans</a></li>*/}
                      {/*<li><a href="/Contact">Contact</a></li>*/}
                    </ul>
                    {/* Newsletter Form */}
                    <div className="search-btn">
                      <i className="fa fa-search" aria-hidden="true"/>
                    </div>
                  </div>
                  {/* Nav End */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ##### Header Area End ##### */}
    </Fragment>
  )
}

export default Navbar
