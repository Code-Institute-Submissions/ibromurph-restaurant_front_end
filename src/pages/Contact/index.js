import {Fragment, useEffect} from "react";
import Navbar from "../Navbar";
import Instagram from "../Instagram";
import Footer from "../Footer";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as yup from "yup";
import { addContactDetails } from "../../actions/ContactedUs/ContactedUsAction";
import {useDispatch, useSelector} from "react-redux";
import {getFindUs} from "../../actions/FindUs/FindUsActions";
import {getAboutUsPage} from "../../actions/AboutUsPage/AboutUsPageAction";
import {getBrandLogo} from "../../actions/BrandLogo/BrandLogoAction";

const schema = yup.object({
  Name: yup.string().required("What's you First name?"),
  Subject: yup.string().required("Please Fill me"),
  Message: yup.string().required("What's your Message"),
  Email: yup.string().email().required("You might need your email later!"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const findData=useSelector(state => state.findUsArray.findUsArray[0])
  const aboutUsPage=useSelector(state=>state.AboutUsPage.AboutUsPage[0])
  const Logo=useSelector(state=>state.LogoArray.LogoArray[0])

  const SubmitForm = (data, resetForm) => {
    dispatch(addContactDetails(data));
    resetForm();
  };
  useEffect(()=>{dispatch(getFindUs())},[])
  useEffect(()=>{dispatch(getAboutUsPage())},[])
  useEffect(()=>{dispatch(getBrandLogo())},[])

  return (
    <Fragment>
      <div>
        <Navbar />
        <div
          className="breadcumb-area bg-img bg-overlay"
          style={{ backgroundImage: `url(${aboutUsPage!==undefined?aboutUsPage.Image:''})` }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcumb Area End ##### */}
        {/* ##### Contact Information Area Start ##### */}
        <div className="contact-information-area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="logo mb-80">
                  <img src={Logo!==undefined?Logo.Logo:''} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Contact Text */}
              <div className="col-12 col-lg-8">
                <div className="contact-text">
                  <p>{aboutUsPage!==undefined?aboutUsPage.AboutUs:''}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                {/* Single Contact Information */}
                <div className="single-contact-information mb-30">
                  <h6>Address:</h6>
                  <p>
                    {findData!==undefined?findData.Address:''}
                  </p>
                </div>
                {/* Single Contact Information */}
                <div className="single-contact-information mb-30">
                  <h6>Phone:</h6><br/>
                  <a href= {findData!==undefined?'tel:'+findData.Phone:''}>
                    <p>{findData!==undefined?findData.Phone:''}</p>
                  </a>
                </div>
                {/* Single Contact Information */}
                <div className="single-contact-information mb-30">
                  <h6>Email:</h6>
                  <a href= {findData!==undefined?'mailto:'+findData.Email:''}>
                    <p>{findData!==undefined?findData.Email:''}</p>
                  </a>                </div>
              </div>
              {/* Newsletter Area */}
            </div>
          </div>
        </div>
        {/* ##### Contact Information Area End ##### */}
        {/* ##### Contact Form Area Start ##### */}
        <div className="contact-area section-padding-0-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>Get In Touch</h3>
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
        <div className="map-area">
          <div id="googleMap" />
        </div>
        <Instagram />
        <Footer />
      </div>
    </Fragment>
  );
};
export default Contact;
