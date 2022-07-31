import { Fragment } from "react";
import Navbar from "./Navbar";
import bc2 from "../assets/img/bg-img/breadcumb2.jpg";
import Instagram from "./Instagram";
import Footer from "./Footer";
import bi1 from "../assets/img/blog-img/1.jpg";
import bi2 from "../assets/img/blog-img/2.jpg";
import bi3 from "../assets/img/blog-img/3.jpg";
import bg1 from "../assets/img/bg-img/bg1.jpg";

const Reserve = () => {
  return (
    <Fragment>
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
                  {/* Content */}
                  <main className="engine">
                    <header className="engine__header">
                      <h1 className="title post-title-green">Book a table</h1>
                      <div className="richtext engine__intro">
                        <p>We look forward to welcoming you back.</p>
                        <p>
                          Please note that we require card details to secure
                          your booking. In the event that the reservation is not
                          cancelled with 24 hours' notice, it will result in a
                          charge of £25 per guest.
                        </p>
                      </div>
                    </header>
                    <div className="opentable opentable--search">
                      <form
                        action
                        method="POST"
                        className="opentable-search"
                        id="reservation"
                        autcomplete="off"
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
                          <div
                            className="select-replace"
                            id="reservation_sitting_selectreplace"
                          >
                            <select
                              id="reservation_sitting"
                              name="reservation_sitting"
                              className="input"
                            >
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="11:15 AM">11:15 AM</option>
                              <option value="11:30 AM">11:30 AM</option>
                              <option value="11:45 AM">11:45 AM</option>
                              <option value="12:00 PM" selected="selected">
                                12:00 PM
                              </option>
                              <option value="12:15 PM">12:15 PM</option>
                              <option value="12:30 PM">12:30 PM</option>
                              <option value="12:45 PM">12:45 PM</option>
                              <option value="01:00 PM">01:00 PM</option>
                              <option value="01:15 PM">01:15 PM</option>
                              <option value="01:30 PM">01:30 PM</option>
                              <option value="01:45 PM">01:45 PM</option>
                              <option value="02:00 PM">02:00 PM</option>
                              <option value="02:15 PM">02:15 PM</option>
                              <option value="02:30 PM">02:30 PM</option>
                              <option value="02:45 PM">02:45 PM</option>
                              <option value="03:00 PM">03:00 PM</option>
                              <option value="03:15 PM">03:15 PM</option>
                              <option value="03:30 PM">03:30 PM</option>
                              <option value="03:45 PM">03:45 PM</option>
                              <option value="04:00 PM">04:00 PM</option>
                              <option value="04:15 PM">04:15 PM</option>
                              <option value="04:30 PM">04:30 PM</option>
                              <option value="04:45 PM">04:45 PM</option>
                              <option value="05:00 PM">05:00 PM</option>
                              <option value="05:15 PM">05:15 PM</option>
                              <option value="05:30 PM">05:30 PM</option>
                              <option value="05:45 PM">05:45 PM</option>
                              <option value="06:00 PM">06:00 PM</option>
                              <option value="06:15 PM">06:15 PM</option>
                              <option value="06:30 PM">06:30 PM</option>
                              <option value="06:45 PM">06:45 PM</option>
                              <option value="07:00 PM">07:00 PM</option>
                              <option value="07:15 PM">07:15 PM</option>
                              <option value="07:30 PM">07:30 PM</option>
                              <option value="07:45 PM">07:45 PM</option>
                              <option value="08:00 PM">08:00 PM</option>
                              <option value="08:15 PM">08:15 PM</option>
                              <option value="08:30 PM">08:30 PM</option>
                              <option value="08:45 PM">08:45 PM</option>
                              <option value="09:00 PM">09:00 PM</option>
                              <option value="09:15 PM">09:15 PM</option>
                              <option value="09:30 PM">09:30 PM</option>
                              <option value="09:45 PM">09:45 PM</option>
                              <option value="10:00 PM">10:00 PM</option>
                              <option value="10:15 PM">10:15 PM</option>
                              <option value="10:30 PM">10:30 PM</option>
                              <option value="10:45 PM">10:45 PM</option>
                            </select>
                            <p className="select-replace__value">12:00 PM</p>
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
                          <div
                            className="select-replace"
                            id="reservation_partysize_selectreplace"
                          >
                            <select
                              id="reservation_partysize"
                              name="reservation_partysize"
                              className="input"
                            >
                              <option value="{1}">1</option>
                              <option value="{2}" selected="selected">
                                2
                              </option>
                              <option value="{3}">3</option>
                              <option value="{4}">4</option>
                              <option value="{5}">5</option>
                              <option value="{6}">6</option>
                            </select>
                            <p className="select-replace__value">2</p>
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
                            <input
                              type="date"
                              className="date_selector"
                              name="birthday"
                            />
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
                            <button type="button" className="btn btn-green p-2">
                              Check Availability
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
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
