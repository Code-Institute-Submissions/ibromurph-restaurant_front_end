import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBrandLogo } from "../../actions/BrandLogo/BrandLogoAction";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const Logo = useSelector((state) => state.LogoArray.LogoArray[0]);
  useEffect(() => {
    dispatch(getBrandLogo());
  }, []);
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Fragment>
      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              {/* Breaking News */}
              <div className="col-12 col-sm-6">
                <div className="breaking-news">
                  <div className="address_header">
                    <ul>
                      <li>{/*<a> Something here</a>*/}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Top Social Info */}
              <div className="col-12 col-sm-6 text-center">
                <Link
                  to="/Reserve"
                  className="header-reserve btn button-header"
                >
                  <span>Reserve a table</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="delicious-main-menu">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classy-navbar justify-content-between"
                id="deliciousNav"
              >
                <Link className="nav-brand" to="/">
                  <img src={Logo !== undefined ? Logo.Logo : ""} alt="" />
                </Link>
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                {/* Menu */}
                <div className="classy-menu">
                  {/* close btn */}
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top" />
                      <span className="bottom" />
                    </div>
                  </div>
                  <div className="classynav">
                    <ul>
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className={splitLocation[1] === "About" ? "active" : ""}
                      >
                        <Link to="/About">About Us</Link>
                      </li>
                      <li
                        className={splitLocation[1] === "Menu" ? "active" : ""}
                      >
                        <Link to="/Menu">Menu</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "Contact" ? "active" : ""
                        }
                      >
                        <Link to="/Contact">Contact</Link>
                      </li>
                      <li
                        className={
                          splitLocation[1] === "Reserve" ? "active" : ""
                        }
                      >
                        <Link to="/Reserve">Reserve</Link>
                      </li>
                    </ul>
                    <div className="search-btn">
                      <i className="fa fa-search" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
