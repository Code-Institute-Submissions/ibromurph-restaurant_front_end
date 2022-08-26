import { Component, Fragment } from "react";
import Instagram from "../Instagram";
import Navbar_hock from "../Navbar";

import Footer from "../Footer";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCarousel } from "../../actions/Carousel/CarouselAction";
import { getTiming } from "../../actions/Timing/TimingAction";
import TimeConvert from "../../Functions/TimeConvert";
import { getAbout_Us } from "../../actions/AboutUS/AboutUsAction";
import {getHomePage} from "../../actions/HomePageImage/homePageImageAction";

class Home extends Component {
  static propTypes = {
    getCarousel: PropTypes.func.isRequired,
    getTiming: PropTypes.func.isRequired,
    CarouselPosts: PropTypes.array.isRequired,
    TimingsArray: PropTypes.array.isRequired,
    getAbout_Us: PropTypes.func.isRequired,
    AboutUsArray: PropTypes.array.isRequired,
    getHomePage:PropTypes.func.isRequired,
    HomePageImg:PropTypes.array.isRequired,
  };
  state = {};

  componentDidMount() {
    this.props.getCarousel();
    this.props.getTiming();
    this.props.getAbout_Us();
    this.props.getHomePage()
  }

  render() {
    const { CarouselPosts, TimingsArray, AboutUsArray ,HomePageImg} = this.props;
    return (
      <Fragment>
        <Navbar_hock/>
        <Carousel>
          {CarouselPosts.map((arr, key) => (
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
        <section className="opening-times">
          <div className="container ">
            <div className="row ">
              <div className="col-sm-6 col-md-3">
                <h5>Monday to Friday</h5>
                <p>
                  from{" "}
                  {TimeConvert(
                    TimingsArray[0] !== undefined
                      ? TimingsArray[0].Weekdays_Start_Time
                      : ""
                  )}{" "}
                  to{" "}
                  {TimeConvert(
                    TimingsArray[0] !== undefined
                      ? TimingsArray[0].Weekdays_End_Time
                      : ""
                  )}
                </p>
              </div>
              <div className="col-sm-6 col-md-3">
                <h5>Saturday and Sunday</h5>
                <p>
                  from{" "}
                  {TimeConvert(
                    TimingsArray[0] !== undefined
                      ? TimingsArray[0].WeekEndTime_Start_Time
                      : ""
                  )}{" "}
                  to{" "}
                  {TimeConvert(
                    TimingsArray[0] !== undefined
                      ? TimingsArray[0].WeekEndTime_End_Time
                      : ""
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="widget-container standard-widget">
          <div className="container mb-5 pb-5">
            <h1 className="color-text-green">34 Bar &amp; Grill</h1>
            <p style={{ textAlign: "justify" }} className="p1">
              {AboutUsArray[0] !== undefined
                ? AboutUsArray[0].Paragraph
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"}
            </p>
          </div>
        </section>
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  {/*<h3>The best Receipies</h3>*/}
                </div>
              </div>
            </div>
            <div className="row">

            </div>
          </div>
        </section>
        <section className="cta-area bg-img bg-overlay" style={{ backgroundImage: `url(${HomePageImg[0]!==undefined?HomePageImg[0].Img:''})` }}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                {/* Cta Content */}
                <div className="cta-content text-center">
                  <h2>{HomePageImg[0]!==undefined?HomePageImg[0].Heading1:''}</h2>
                  <p>{HomePageImg[0]!==undefined?HomePageImg[0].Paragraph:''}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Instagram />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  CarouselPosts: state.CarouselPosts.CarouselPosts,
  TimingsArray: state.TimingsArray.TimingsArray,
  AboutUsArray: state.AboutUsArray.AboutUsArray,
  HomePageImg:state.HomePageImg.HomePageImg
});

export default connect(mapStateToProps, {
  getCarousel,
  getTiming,
  getAbout_Us,
  getHomePage,
})(Home);
