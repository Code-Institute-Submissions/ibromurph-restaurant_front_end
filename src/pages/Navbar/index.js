import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBrandLogo } from "../../actions/BrandLogo/BrandLogoAction";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar_hock = () => {
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo !== undefined ? Logo.Logo : ""} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="/"
                className={splitLocation[1] === "" ? "green_active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/About"
                className={splitLocation[1] === "About" ? "green_active" : ""}
              >
                About us
              </Nav.Link>
              <Nav.Link
                href="/Menu"
                className={splitLocation[1] === "Menu" ? "green_active" : ""}
              >
                Menu
              </Nav.Link>
              <Nav.Link
                href="/Contact"
                className={splitLocation[1] === "Contact" ? "green_active" : ""}
              >
                Contact us
              </Nav.Link>
              <Nav.Link
                href="/Reserve"
                className={splitLocation[1] === "Reserve" ? "green_active" : ""}
              >
                Reserve Booking
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Link to="/Reserve" className="header-reserve btn button-header">
                <span>Reserve a table</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navbar_hock;
