import { Fragment, useEffect } from "react";
import Navbar from "../Navbar";
import Instagram from "../Instagram";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import { Interweave } from "interweave";
import { getAbout_Us } from "../../actions/AboutUS/AboutUsAction";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { addContactDetails } from "../../actions/ContactedUs/ContactedUsAction";

const About = () => {
  const schema = yup.object({
    Name: yup.string().required("What's you First name?"),
    Subject: yup.string().required("Please Fill me"),
    Message: yup.string().required("What's your Message"),
    Email: yup.string().email().required("You might need your email later!"),
  });

  const SubmitForm = (data, resetForm) => {
    dispatch(addContactDetails(data));
    resetForm();
  };
  const dispatch = useDispatch();
  const aboutUs = useSelector((state) => state.AboutUsArray.AboutUsArray);
  useEffect(() => {
    dispatch(getAbout_Us());
  }, []);
  return (
    <Fragment>
      <div>
        <Navbar />
        {/* ##### Breadcumb Area Start ##### */}
        <div
          className="breadcumb-area bg-img bg-overlay"
          style={{
            backgroundImage: `url(${
              aboutUs.length !== 0 ? aboutUs[0].CoverImage : ""
            })`,
          }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>About us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcumb Area End ##### */}
        {/* ##### About Area Start ##### */}
        <section className="about-area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {aboutUs.length !== 0 ? (
                  <Interweave content={aboutUs[0].Paragraph2} />
                ) : (
                  ""
                )}
                {/*<div className="section-heading">*/}
                {/*  <h3>Who we are and what we do?</h3>*/}
                {/*</div>*/}
              </div>
            </div>
            {/*<div className="row">*/}
            {/*  <div className="col-12">*/}
            {/*    <h6 className="sub-heading pb-5">Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt,*/}
            {/*      sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per*/}
            {/*      inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.*/}
            {/*      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</h6>*/}
            {/*    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec*/}
            {/*      varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in*/}
            {/*      iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius*/}
            {/*      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris*/}
            {/*      ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet.*/}
            {/*      Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh.*/}
            {/*      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="row align-items-center mt-70">*/}
            {/*  /!* Single Cool Fact *!/*/}
            {/*  <div className="col-12 col-sm-6 col-lg-3">*/}
            {/*    <div className="single-cool-fact">*/}
            {/*      <img src={salad} alt=""/>*/}
            {/*      <h3><span className="counter">1287</span></h3>*/}
            {/*      <h6>Amazing receipies</h6>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  /!* Single Cool Fact *!/*/}
            {/*  <div className="col-12 col-sm-6 col-lg-3">*/}
            {/*    <div className="single-cool-fact">*/}
            {/*      <img src={hamburger} alt=""/>*/}
            {/*      <h3><span className="counter">25</span></h3>*/}
            {/*      <h6>Burger receipies</h6>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  /!* Single Cool Fact *!/*/}
            {/*  <div className="col-12 col-sm-6 col-lg-3">*/}
            {/*    <div className="single-cool-fact">*/}
            {/*      <img src={rib} alt=""/>*/}
            {/*      <h3><span className="counter">471</span></h3>*/}
            {/*      <h6>Meat receipies</h6>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  /!* Single Cool Fact *!/*/}
            {/*  <div className="col-12 col-sm-6 col-lg-3">*/}
            {/*    <div className="single-cool-fact">*/}
            {/*      <img src={pancake} alt=""/>*/}
            {/*      <h3><span className="counter">326</span></h3>*/}
            {/*      <h6>Desert receipies</h6>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="row">*/}
            {/*  <div className="col-12">*/}
            {/*    <img className="mb-70" src={about} alt=""/>*/}
            {/*    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec*/}
            {/*      varius dui. Suspendisse potenti. Vestibulum ac pellentesque tortor. Aenean congue sed metus in*/}
            {/*      iaculis. Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget lobortis purus. Orci varius*/}
            {/*      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada et mauris*/}
            {/*      ut lobortis. Sed eu iaculis sapien, eget luctus quam. Aenean hendrerit varius massa quis laoreet.*/}
            {/*      Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh.*/}
            {/*      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </section>
        {/* ##### About Area End ##### */}
        {/* ##### Contact Area Start ##### */}
        <div className="contact-area section-padding-0-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>Contact Us</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="contact-form-area">
                  <Formik
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) =>
                      SubmitForm(values, resetForm)
                    }
                    initialValues={{
                      Name: "",
                      Email: "",
                      Subject: "",
                      Message: "",
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      touched,
                      errors,
                    }) => (
                      <Form
                        autcomplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <Form.Control
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                              name="Name"
                              value={values.Names}
                              onChange={handleChange}
                              isInvalid={!!errors.Name}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.Name}
                            </Form.Control.Feedback>
                          </div>
                          <div className="col-12 col-lg-6">
                            <Form.Control
                              type="email"
                              className="form-control"
                              id="email"
                              name="Email"
                              placeholder="E-mail"
                              value={values.Email}
                              onChange={handleChange}
                              isInvalid={!!errors.Email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.Email}
                            </Form.Control.Feedback>
                          </div>
                          <div className="col-12">
                            <Form.Control
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="Subject"
                              value={values.Subject}
                              onChange={handleChange}
                              isInvalid={!!errors.Subject}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.Subject}
                            </Form.Control.Feedback>
                          </div>
                          <div className="col-12">
                            <Form.Control
                              as="textarea"
                              className="form-control"
                              id="message"
                              cols={30}
                              rows={10}
                              placeholder="Message"
                              defaultValue={""}
                              name="Message"
                              value={values.Message}
                              onChange={handleChange}
                              isInvalid={!!errors.Message}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.Message}
                            </Form.Control.Feedback>
                          </div>
                          <div className="col-12 text-center">
                            <button
                              className="btn delicious-btn mt-30"
                              type="submit"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Area End ##### */}
        {/* ##### Follow Us Instagram Area Start ##### */}
        <Instagram />
        <Footer />
      </div>
    </Fragment>
  );
};
export default About;
