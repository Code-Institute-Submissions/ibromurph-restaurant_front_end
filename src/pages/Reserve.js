import { Fragment, useState } from "react";
import Navbar from "./Navbar";
import bc2 from "../assets/img/bg-img/breadcumb2.jpg";
import Instagram from "./Instagram";
import Footer from "./Footer";
import bi1 from "../assets/img/blog-img/1.jpg";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { Time_Hours } from "./DataFiles/Time";
import { Slots } from "./DataFiles/Slots";
import { Temp_Time } from "./DataFiles/Temp_Time";

const schemaBookTable = yup.object({
  Time: yup.string().required("Please Pick Time"),
  PartySize: yup.string().required("choose party time"),
  Date_event: yup.string().required("Select Date"),
});

const Reserve = () => {
  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const TableOne = () => {
    setShow(false);
    setShowTwo(true);
    setShowThree(false);
  };

  const TableThree = () => {
    setShow(false);
    setShowTwo(false);
    setShowThree(true);
  };
  const ReverseTableOne = () => {
    setShow(false);
    setShowTwo(false);
  };
  return (
    <Fragment>
      {console.log(show, showTwo, showThree)}
      <Navbar />
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: `url(${bc2})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Book a table</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="blog-posts-area">
                {/* Single Blog Area */}
                <div className="single-blog-area mb-80">
                  <div className="banner">
                    <img src={bi1} alt="" />
                  </div>
                  <main className="engine" id="table-one">
                    <div style={{ display: show === true ? "" : "None" }}>
                      <header className="engine__header">
                        <h1 className="title color-text-green">Book a table</h1>
                        <div className="richtext engine__intro">
                          <p>We look forward to welcoming you back.</p>
                          <p>
                            Please note that we require card details to secure
                            your booking. In the event that the reservation is
                            not cancelled with 24 hours' notice, it will result
                            in a charge of <b>£25</b> per guest.
                          </p>
                        </div>
                      </header>
                      <div className="opentable opentable--search">
                        <Formik
                          validationSchema={schemaBookTable}
                          onSubmit={(values) => TableOne(values)}
                          initialValues={{
                            Time: "",
                            PartySize: "",
                            Date_event: "",
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
                              className="opentable-search"
                              id="reservation"
                              autcomplete="off"
                              noValidate
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="hidden"
                                name="action"
                                defaultValue="search"
                              />
                              {/*Time*/}
                              <div
                                id="reservation_sitting_wrap"
                                className="field field--select-callback required field-select"
                              >
                                <label
                                  className="field__label"
                                  htmlFor="reservation_sitting"
                                >
                                  Choose time<span> *</span>
                                </label>
                                <div id="reservation_sitting_selectreplace">
                                  <Form.Select
                                    id="reservation_sitting"
                                    name="reservation_sitting"
                                    className="input"
                                    isInvalid={!!errors.Time}
                                    onChange={(e, event) => {
                                      handleChange({
                                        ...event,
                                        target: {
                                          name: "Time",
                                          value: e.target.value,
                                        },
                                      });
                                    }}
                                  >
                                    {Time_Hours.map((arr, key) => (
                                      <option key={key} value={arr.value}>
                                        {arr.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.Time}
                                  </Form.Control.Feedback>
                                </div>
                              </div>
                              {/*Party Size*/}

                              <div
                                id="reservation_partysize_wrap"
                                className="field field--select-callback required field-alt field-select"
                              >
                                <label
                                  className="field__label"
                                  htmlFor="reservation_partysize"
                                >
                                  Party size<span> *</span>
                                </label>
                                <div id="reservation_partysize_selectreplace">
                                  <Form.Select
                                    id="reservation_partysize"
                                    name="reservation_partysize"
                                    className="input"
                                    isInvalid={!!errors.PartySize}
                                    onChange={(e, event) => {
                                      handleChange({
                                        ...event,
                                        target: {
                                          name: "PartySize",
                                          value: e.target.value,
                                        },
                                      });
                                    }}
                                  >
                                    {Slots.map((arr, key) => (
                                      <option key={key} value={arr.value}>
                                        {arr.label}
                                      </option>
                                    ))}
                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.PartySize}
                                  </Form.Control.Feedback>
                                </div>
                              </div>
                              {/*Date*/}

                              <div
                                id="reservation_partysize_wrap"
                                className="field field--select-callback required field-alt field-select"
                              >
                                <label
                                  className="field__label"
                                  htmlFor="reservation_partysize"
                                >
                                  Choose Date<span> *</span>
                                </label>
                                <div
                                  className="select-replace"
                                  id="reservation_partysize_selectreplace"
                                >
                                  <Form.Control
                                    type="date"
                                    name="Date_event"
                                    onChange={handleChange}
                                    isInvalid={!!errors.Date_event}
                                    className="date_selector"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.Date_event}
                                  </Form.Control.Feedback>
                                </div>
                              </div>
                              <div
                                id="reservation_partysize_wrap"
                                className="field field--select-callback required field-alt field-select"
                              >
                                <label
                                  className="field__label"
                                  htmlFor="reservation_partysize"
                                >
                                  &nbsp;
                                </label>
                                <div
                                  className="select-replace text-center mt-2"
                                  id="reservation_partysize_selectreplace"
                                >
                                  <button
                                    type="button"
                                    type="submit"
                                    className="btn btn-green p-2"
                                  >
                                    Check Availability
                                  </button>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                      <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                    </div>
                    <div style={{ display: showTwo === true ? "" : "None" }}>
                      <header className="engine__header">
                        <h1 className="title color-text-green">
                          CHOOSE A TIME
                        </h1>
                        <div className="richtext engine__intro">
                          <p>
                            Booking for{" "}
                            <span className="color-text-green">5</span> people
                            on{" "}
                            <span className="color-text-green">
                              Saturday 6th August
                            </span>
                            .
                          </p>
                        </div>
                      </header>
                      <div className="opentable opentable--search">
                        <div className="row ">
                          {Temp_Time.map((arr, key) => (
                            <div key={key} className="col-3 mt-3 ">
                              <button
                                onClick={() => TableThree()}
                                className="btn btn-green opentable-slots__time"
                              >
                                <span>{arr.value}</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <header className="engine__header">
                        <div className="engine__intro"></div>
                      </header>
                      <button
                        className="btn"
                        style={{ background: "transparent" }}
                        onClick={() => ReverseTableOne()}
                      >
                        <span className="color-text-green text-capitalize">
                          SEARCH AGAIN
                        </span>
                      </button>
                    </div>

                    <div style={{ display: showThree === true ? "" : "None" }}>
                      <header className="engine__header">
                        <h1 className="title color-text-green">YOUR DETAILS</h1>
                        <div className="richtext engine__intro">
                          <p>
                            Booking for{" "}
                            <span className="color-text-green">5</span> people
                            at <span className="color-text-green">6:15pm</span>{" "}
                            on{" "}
                            <span className="color-text-green">
                              Saturday 1st October
                            </span>
                            .
                          </p>
                        </div>
                      </header>

                      <div className="opentable opentable--details">
                        <Formik
                          validationSchema={schemaBookTable}
                          onSubmit={(values) => TableOne(values)}
                          initialValues={{
                            Time: "",
                            PartySize: "",
                            Date_event: "",
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
                              className=""
                              id="reservation"
                              autcomplete="off"
                              noValidate
                              onSubmit={handleSubmit}
                            >
                              <div
                                id="reservation_sitting_wrap"
                                className="field field--select-callback required field-select"
                              >
                                <div className="row">
                                  <div className="col-12">
                                    <div className="contact-form-area">
                                      <Form>
                                        <div className="row">
                                          <div className="col-12 col-lg-6">
                                            <Form.Label className="field__label">
                                              FIRST NAME
                                              <span className="color-text-green">
                                                {" "}
                                                *
                                              </span>
                                            </Form.Label>
                                            <Form.Control
                                              type="text"
                                              className="form-control"
                                              id="name"
                                            />
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <Form.Label className="field__label">
                                              LAST NAME
                                              <span className="color-text-green">
                                                {" "}
                                                *
                                              </span>
                                            </Form.Label>
                                            <Form.Control
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>

                                          <div className="col-12 col-lg-6">
                                            <Form.Label className="field__label">
                                              EMAIL
                                              <span className="color-text-green">
                                                {" "}
                                                *
                                              </span>
                                            </Form.Label>
                                            <Form.Control
                                              type="email"
                                              className="form-control"
                                              id="name"
                                            />
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <Form.Label className="field__label">
                                              TELEPHONE NUMBER
                                              <span className="color-text-green">
                                                {" "}
                                                *
                                              </span>
                                            </Form.Label>
                                            <Form.Control
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>

                                          <div className="col-12 col-lg-12">
                                            <Form.Label
                                              style={{ textTransform: "unset" }}
                                            >
                                              Are you booking on behalf of
                                              somebody else?
                                              <span className="color-text-green">
                                                {" "}
                                                *
                                              </span>
                                            </Form.Label>

                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                              />
                                              <label
                                                style={{
                                                  textTransform: "unset",
                                                }}
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                              >
                                                Yes
                                              </label>
                                            </div>
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                checked
                                              />
                                              <label
                                                style={{
                                                  textTransform: "unset",
                                                }}
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault2"
                                              >
                                                No
                                              </label>
                                            </div>
                                          </div>

                                          <div className="col-12 col-lg-12 mt-2">
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefault"
                                              >
                                                Yes, I'm happy to receive
                                                occasional emails
                                              </label>
                                            </div>

                                            <Form.Text
                                              id="passwordHelpBlock"
                                              muted
                                            >
                                              We'd like to keep in touch with
                                              you about our restaurants. We
                                              refers to Caprice Holdings Ltd and
                                              our sister brands are Troia (UK)
                                              Restaurants Ltd trading as: The
                                              Ivy Collection, The Ivy Asia,
                                              Harry’s Dolce Vita, Harry’s Bar
                                              James Street, Brasserie of Light
                                              and Birley Club Group. We will
                                              contact you about opportunities to
                                              join us for special events as well
                                              as information about new seasonal
                                              menu changes you can enjoy. We
                                              will keep your data secure, and of
                                              course would never sell or share
                                              data you share with us. You can
                                              change your mind at any time by
                                              clicking unsubscribe on any email
                                              you receive or by clicking the
                                              link on our website.
                                            </Form.Text>
                                          </div>

                                          <div className="col-12 text-center">
                                            <button
                                              className="btn delicious-btn mt-30"
                                              type="submit"
                                            >
                                              BOOK NOW
                                            </button>

                                            <div className="underline_line" />

                                            <button
                                              className="btn"
                                              style={{
                                                background: "transparent",
                                              }}
                                              onClick={() => ReverseTableOne()}
                                            >
                                              <span className="color-text-green text-capitalize">
                                                SEARCH AGAIN
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </Form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                      <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                    </div>
                  </main>
                  <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                  <div className="blog-content">
                    <h2
                      style={{ fontSize: "1.125rem !important" }}
                      className="post-title text-center"
                    >
                      SPEAK TO SOMEONE IN PERSON
                    </h2>
                    <div className="richtext text-center">
                      <p>
                        If you would like to make a larger booking or have any
                        questions, please get in touch.
                      </p>
                      <p>
                        *Please note, that all calls will be recorded for
                        training and monitoring purposes.
                      </p>
                    </div>

                    <div className="mt-5 text-center grid grid--hflush">
                      <section className="l-one-half s-full contact__telephone">
                        <h2 className="copytitle">Contact us</h2>
                        <p style={{ fontSize: "0.9rem" }}>
                          Please call the team on{" "}
                          <a
                            className="post-title"
                            style={{ fontSize: "14px" }}
                            href="tel:+442033503434"
                            itemProp="telephone"
                          >
                            020 3350 3434
                          </a>
                        </p>
                      </section>
                      <section className="l-one-half s-full contact__location">
                        <h2 className="copytitle">Find us</h2>
                        <address
                          itemProp="address"
                          itemScope=""
                          itemType="http://schema.org/PostalAddress"
                        >
                          <p style={{ fontSize: "0.9rem" }}>
                            34 Grosvenor Square (Entrance on South Audley
                            Street) London
                            <br />
                            W1K 2HD
                          </p>
                        </address>
                        <p>
                          <span
                            itemProp="geo"
                            itemScope=""
                            itemType="http://schema.org/GeoCoordinates"
                          >
                            <meta itemProp="latitude" content="51.5106" />
                            <meta itemProp="longitude" content="-0.152613" />
                          </span>
                          <a
                            className="post-title"
                            style={{ fontSize: "14px" }}
                            itemProp="map"
                            href="http://maps.google.co.uk/maps?ll=51.5106%2C-0.152613&amp;z=16&amp;q=34+Mayfair%2C+34+Grosvenor+Square+%28Entrance+on+South+Audley+Street%29%2C+London+W1K+2HD"
                            target="_blank"
                            rel="noopener"
                          >
                            View on Google maps
                          </a>
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
      <Footer />
    </Fragment>
  );
};
export default Reserve;
