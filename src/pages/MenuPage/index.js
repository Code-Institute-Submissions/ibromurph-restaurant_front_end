import { Fragment, useEffect } from "react";
import Navbar from "../Navbar";
import Instagram from "../Instagram";
import Footer from "../Footer";
import { getMenuCarousel } from "../../actions/MenuCarousel/MenuCarouselAction";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { getMenu } from "../../actions/Menus/MenuAction";
import TimeConvert from "../../Functions/TimeConvert";

const MenuPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuCarousel());
  }, []);
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  const Images = useSelector((state) => state.MenuCarousel.MenuCarousel);
  const MenuItems = useSelector((state) => state.Menu.Menu);
  return (
    <Fragment>
      <Navbar />
      <Carousel>
        {Images.map((arr, key) => (
          <Carousel.Item key={key}>
            <img
              style={{ opacity: arr.ImageOpacity + "%" }}
              className="d-block w-100"
              src={arr.Image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: arr.Color_Caption_Heading }}>
                {arr.Caption_Heading}
              </h3>
              <p style={{ color: arr.Color_Caption_subHeading }}>
                {arr.Caption_subHeading}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <section className="main-body mb-5">
        <article className="main-content">
          <section className="widget-container page-title">
            <div className="container">
              <h1 className="page-title">Menus</h1>
            </div>
          </section>
          <section className="widget-container standard-widget">
            <div className="container">
              <h2 className="golden__color">
                Take a look at our seasonally changing A La Carte and weekend
                brunch.
              </h2>
              <p>
                We also have a diverse wine list and a cocktail menu featuring
                specially created drinks and old classics.
              </p>
            </div>
          </section>

          <section className="widget-container menu-widget">
            <div className="container">
              <div className="menu-widget-inner">
                {MenuItems.map((arr, key) => (
                  <a
                    key={key}
                    href={arr.Menu_File}
                    target="_blank"
                    className="menu"
                    id="a_la_carte"
                  >
                    <div className="menu__inner">
                      <h5>{arr.Title}</h5>
                      <div className="menu__content">
                        {arr.Week_Day ? (
                          <div className="menu__time">
                            <h6>Monday to Friday</h6>
                            <p>
                              {TimeConvert(arr.Week_Day_Start_Time)}
                              &nbsp;-&nbsp;{TimeConvert(arr.Week_Day_End_Time)}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}

                        {arr.Week_End ? (
                          <div className="menu__time">
                            <h6>Saturday and Sunday</h6>
                            <p>
                              {TimeConvert(arr.Week_End_Start_Time)}
                              &nbsp;-&nbsp;
                              {TimeConvert(arr.Week_End_End_Time)}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="text-btn">View Menu</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </article>
      </section>
      <Instagram />
      <Footer />
    </Fragment>
  );
};
export default MenuPage;
