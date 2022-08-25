import { Fragment, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Instagram from "../Instagram";
import Footer from "../Footer";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { Time_Hours } from "../DataFiles/Time";
import { Slots } from "../DataFiles/Slots";
import { useDispatch, useSelector } from "react-redux";
import { getBookingCover } from "../../actions/Booking/bookingCoverAction";
import { getBookingCover2 } from "../../actions/Booking/bookingCover2Action";
import DateGetter from "../../Functions/DayGetter";
import { addBooking } from "../../actions/Booking/BookingAction";
import {
  CancelBookingViaBID,
  CancelBookingViaEmail,
} from "../../actions/Booking/CancelBookingAction";
import { InfinitySpin } from "react-loader-spinner";
import { CheckAvailableBookings } from "../../actions/Booking/CheckBookingsAction";
import toast from "react-hot-toast";

const schemaBookTable = yup.object({
  Time: yup.string().required("Please Pick Time"),
  PartySize: yup.string().required("Choose party time"),
  Date_event: yup
    .date()
    .min(new Date(), "Booking Date Cannot be in the past")
    .max(new Date(Date.now() + 7884000000), "Booking within 3 months Date")
    .required("Booking date is required"),
});
const schemaCancelBooking = yup.object().shape(
  {
    Email: yup.string().when("BookingID", {
      is: (BookingID) => !BookingID || BookingID.length === 0,
      then: yup
        .string()
        .email("Please Enter Valid Email")
        .required("At least one of the fields is required"),
    }),
    BookingID: yup.string().when("Email", {
      is: (Email) => !Email || Email.length === 0,
      then: yup.string().required("At least one of the fields is required"),
    }),
  },
  ["Email", "BookingID"]
);

const schemaBookTableDetails = yup.object({
  First_Name: yup.string().required("What's you First name?"),
  Last_Name: yup.string().required("What's you Last name?"),
  Email: yup.string().email().required("You might need your email later!"),
  Number: yup.string().required("We may need to Contact you for confirmation"),
});
const Reserve = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingCover());
  }, []);
  useEffect(() => {
    dispatch(getBookingCover2());
  }, []);

  const BookingCover = useSelector((state) => state.BookingCover.BookingCover);
  const BookingCover2 = useSelector(
    (state) => state.BookingCover2.BookingCover2
  );
  const message = useSelector((state) => state.message.message);
  const Slots_check = useSelector((state) => state.CheckBookingArray);
  const Bookings = useSelector((state) => state.Bookings);
  const CancelBooking_Bool = useSelector((state) => state.cancelArray);
  const BookingEmails = useSelector((state) => state.cancelBookingsData);
  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [Time, setTime] = useState("");
  const [CancelBookingLoading, setCancelBookingLoading] = useState(false);
  const [CancelBookingCheck, setCancelBookingCheck] = useState(false);
  const [CancelBookingEmail, setCancelBookingEmail] = useState(false);
  const [Party_Size, setPartySize] = useState("");
  const [Booking_Date, setDateEvent] = useState("");
  const [Booking_Time, setDateEventButton] = useState("");
  const [First_Name, setFirst_Name] = useState("");
  const [Last_Name, setLast_Name] = useState("");
  const [Email, setEmail] = useState("");
  const [Telephone_Number, setTelephone_Number] = useState("");
  const [Get_Emails, setGet_Emails] = useState("");
  const [Type_of_Booking, setType_of_Booking] = useState(true);
  const [sendComplete, setSendComplete] = useState(false);
  const [TableFour, setTableFour] = useState(false);
  const [BookingDetails, setBookingDetails] = useState(false);
  const [CancelBookingBool, setCancelBooking] = useState(false);
  const [SlotsFind, setSlotsFind] = useState([]);
  const [NoDataFound, setNoDataFound] = useState(false);

  const TableOne = (values) => {
    setShow(false);
    setShowTwo(true);
    setShowThree(false);
    setTime(values.Time);
    setPartySize(values.PartySize);
    setDateEvent(values.Date_event);
    const Booking_Date = values.Date_event;
    const Booking_Time = values.Time;
    const Party_Size = values.PartySize;
    const data = { Booking_Time, Booking_Date, Party_Size };
    dispatch(CheckAvailableBookings(data));
  };
  const StartReservation = () => {
    setShow(true);
    setShowTwo(true);
    setShowThree(false);
    setTableFour(false);
    setCancelBooking(false);
  };
  const TableThree = (value) => {
    setShow(false);
    setShowTwo(false);
    setShowThree(true);
    setDateEventButton(value);
  };
  const ReverseTableOne = () => {
    setShow(true);
    setShowTwo(false);
    setShowThree(false);
  };
  const TableDetails = (values) => {
    setFirst_Name(values.First_Name);
    setLast_Name(values.Last_Name);
    setEmail(values.Email);
    setTelephone_Number(values.Number);
    setGet_Emails(values.GetEmails);
    // const dt = moment(Booking_Time, ["h:mm A"]).format("HH:mm");
    const dt = Booking_Time;
    setDateEventButton(dt);
    setSendComplete(true);
  };
  const CancelBooking = () => {
    setShow(false);
    setShowTwo(false);
    setShowThree(false);
    setTableFour(false);
    setCancelBooking(true);
    setCancelBookingLoading(false);
    setCancelBookingCheck(false);
    setCancelBookingEmail(false);
  };
  const sendData = () => {
    const data = {
      First_Name,
      Last_Name,
      Email,
      Telephone_Number,
      Get_Emails,
      Type_of_Booking,
      Party_Size,
      Booking_Date,
      Booking_Time,
    };
    dispatch(addBooking(data));
    setSendComplete(false);
    setFirst_Name("");
    setLast_Name("");
    setEmail("");
    setTelephone_Number("");
    setGet_Emails("");
    setType_of_Booking("");
    setPartySize("");
    setDateEvent("");
    setDateEventButton("");
    setShowThree(false);
    setTableFour(true);
  };
  const cancelBooking = (data) => {
    if (data.BookingID !== "") {
      dispatch(CancelBookingViaBID(data.BookingID));
    } else {
      dispatch(CancelBookingViaEmail(data.Email.toLowerCase()));
    }
  };
  useEffect(() => {
    if (sendComplete) {
      sendData();
    }
  }, [sendComplete]);
  useEffect(() => {
    if (Bookings.Bookings.length !== 0) {
      setBookingDetails(Bookings.Bookings[0]);
    }
  }, [Bookings]);
  useEffect(() => {
    if (CancelBooking_Bool.isLoading) {
      setCancelBookingLoading(true);
    } else {
      setCancelBookingLoading(false);
    }
  }, [CancelBooking_Bool]);
  useEffect(() => {
    if (CancelBooking_Bool.isCancelled) {
      setCancelBookingCheck(true);
    } else {
      setCancelBookingCheck(false);
    }
  }, [CancelBooking_Bool]);
  useEffect(() => {
    if (BookingEmails.cancelBookingsData.length !== 0) {
      setCancelBookingEmail(true);
    } else {
      setCancelBookingEmail(false);
    }
  }, [BookingEmails]);
  useEffect(() => {
    if (Slots_check.CheckBookingArray.Slots !== undefined) {
      setSlotsFind(Slots_check.CheckBookingArray.Slots);
    }
    if (Slots_check.CheckBookingArray.message !== undefined) {
      setNoDataFound(true);
    }
  }, [Slots_check.CheckBookingArray]);
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);
  // useEffect(()=>{
  //   toast("Hello World")
  //
  //   let tostid=undefined
  //   if(Bookings.isLoading){
  //     tostid=toast.loading('Making your Booking')
  //
  //   }
  //   if (Bookings.Bookings.length!==0){
  //     toast.success('Booked!')
  //     toast.dismiss(tostid)
  //   }
  //   if(Bookings.isFailed){
  //   toast.error('Oops booking Failed')
  //     toast.dismiss(tostid)
  //
  //   }
  // },[Bookings.isLoading])

  return (
    <Fragment>
      <Navbar />
      {BookingCover.length !== 0 ? (
        <div
          className="breadcumb-area bg-img bg-overlay"
          style={{ backgroundImage: `url(${BookingCover[0].cover_Img})` }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>{BookingCover[0].Caption}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="blog-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="blog-posts-area">
                <div className="single-blog-area mb-80">
                  {/*<button onClick={notify}>Make me a toast</button>*/}

                  <div className="banner">
                    {BookingCover2.length !== 0 ? (
                      <img src={BookingCover2[0].cover_Img} alt="" />
                    ) : (
                      ""
                    )}
                  </div>
                  <main className="engine" id="table-one">
                    {(() => {
                      if (Bookings.isLoading) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                Making your Booking
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  Please Wait While we are making your
                                  reservation
                                </p>
                              </div>
                            </header>
                            <div className="opentable opentable--search">
                              <InfinitySpin width="200" color="#4fa94d" />
                            </div>
                            <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                            <header className="engine__header">
                              <div className="engine__intro"></div>
                            </header>
                            <button
                              className="btn"
                              style={{ background: "transparent" }}
                              onClick={() => CancelBooking()}
                            >
                              <span className="color-text-green text-capitalize">
                                Cancel Booking
                              </span>
                            </button>
                          </div>
                        );
                      }
                      if (CancelBookingLoading) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                Cancelling your booking
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  Please Wait While we are cancelling your
                                  reservation
                                </p>
                              </div>
                            </header>
                            <div className="opentable opentable--search">
                              <InfinitySpin width="200" color="#4fa94d" />
                            </div>
                            <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                            <header className="engine__header">
                              <div className="engine__intro"></div>
                            </header>
                            <button
                              className="btn"
                              style={{ background: "transparent" }}
                              onClick={() => CancelBooking()}
                            >
                              <span className="color-text-green text-capitalize">
                                Cancel Booking
                              </span>
                            </button>
                          </div>
                        );
                      }
                      //Table 1 of booking
                      if (show) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                Book a table
                              </h1>
                              <div className="richtext engine__intro">
                                <p>We look forward to welcoming you back.</p>
                                <p>
                                  {BookingCover2.length !== 0
                                    ? BookingCover2[0].Text
                                    : ""}
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
                                          <option selected disabled>
                                            Please Select
                                          </option>
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
                                          <option selected disabled>
                                            Please Select
                                          </option>
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
                            <header className="engine__header">
                              <div className="engine__intro"></div>
                            </header>
                            <button
                              className="btn"
                              style={{ background: "transparent" }}
                              onClick={() => CancelBooking()}
                            >
                              <span className="color-text-green text-capitalize">
                                Cancel Booking
                              </span>
                            </button>
                          </div>
                        );
                      } else if (showTwo) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                CHOOSE A TIME
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  Booking for{" "}
                                  <span className="color-text-green">
                                    {Party_Size}
                                  </span>{" "}
                                  people on{" "}
                                  <span className="color-text-green">
                                    {DateGetter(Booking_Date)}
                                  </span>
                                  .
                                </p>
                              </div>
                            </header>
                            <div className="opentable opentable--search">
                              <div className="row ">
                                {SlotsFind.map((arr, key) => (
                                  <div key={key} className="col-3 mt-3 ">
                                    <button
                                      onClick={() => TableThree(arr)}
                                      className="btn btn-green opentable-slots__time"
                                    >
                                      <span>{arr}</span>
                                    </button>
                                  </div>
                                ))}

                                {NoDataFound ? (
                                  <div className="">
                                    <div className="col-12">
                                      <div className="contact-form-area">
                                        <div className="row">
                                          <div className="col-12 text-center mt-4">
                                            <h6>
                                              Oops! not Slots are available
                                              Please search again
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {/*{TimeGetter(Booking_Date, Time).map(*/}
                                {/*  (arr, key) => (*/}
                                {/*    <div key={key} className="col-3 mt-3 ">*/}
                                {/*      <button*/}
                                {/*        onClick={() => TableThree(arr)}*/}
                                {/*        className="btn btn-green opentable-slots__time"*/}
                                {/*      >*/}
                                {/*        <span>{arr}</span>*/}
                                {/*      </button>*/}
                                {/*    </div>*/}
                                {/*  )*/}
                                {/*)}*/}
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
                        );
                      } else if (showThree) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                YOUR DETAILS
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  Booking for{" "}
                                  <span className="color-text-green">
                                    {Party_Size}
                                  </span>{" "}
                                  people at{" "}
                                  <span className="color-text-green">
                                    {Booking_Time}
                                  </span>{" "}
                                  {DateGetter(Booking_Date)}.
                                </p>
                              </div>
                            </header>

                            <div className="opentable opentable--details">
                              <Formik
                                validationSchema={schemaBookTableDetails}
                                onSubmit={(values) => TableDetails(values)}
                                initialValues={{
                                  First_Name: First_Name,
                                  Last_Name: Last_Name,
                                  Email: Email,
                                  Number: Telephone_Number,
                                  TypeofBooking: "",
                                  GetEmails: Get_Emails,
                                }}
                              >
                                {({
                                  handleSubmit,
                                  handleChange,
                                  values,
                                  touched,
                                  errors,
                                }) => (
                                  <Form noValidate onSubmit={handleSubmit}>
                                    <div
                                      id="reservation_sitting_wrap"
                                      className="field field--select-callback required field-select"
                                    >
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="contact-form-area">
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
                                                  name="First_Name"
                                                  onChange={handleChange}
                                                  isInvalid={
                                                    !!errors.First_Name
                                                  }
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                  {errors.First_Name}
                                                </Form.Control.Feedback>
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
                                                  name="Last_Name"
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.Last_Name}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                  {errors.Last_Name}
                                                </Form.Control.Feedback>
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
                                                  name="Email"
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.Email}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                  {errors.Email}
                                                </Form.Control.Feedback>
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
                                                  name="Number"
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.Number}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                  {errors.Number}
                                                </Form.Control.Feedback>
                                              </div>

                                              <div className="col-12 col-lg-12">
                                                <Form.Label
                                                  style={{
                                                    textTransform: "unset",
                                                  }}
                                                >
                                                  Are you booking on behalf of
                                                  somebody else?
                                                  <span className="color-text-green">
                                                    {" "}
                                                    *
                                                  </span>
                                                </Form.Label>
                                                <Form.Group as={Row}>
                                                  <Col sm={12}>
                                                    <Form.Check
                                                      name="TypeofBooking"
                                                      onChange={handleChange}
                                                      type="switch"
                                                      id="custom-switch"
                                                      label=""
                                                    />
                                                  </Col>
                                                </Form.Group>
                                              </div>
                                              <div className="col-12 col-lg-12 mt-2">
                                                <div className="form-check">
                                                  <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckDefault"
                                                    name="GetEmails"
                                                    onChange={handleChange}
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
                                                  We'd like to keep in touch
                                                  with you about our
                                                  restaurants. We refers to
                                                  Caprice Holdings Ltd and our
                                                  sister brands are Troia (UK)
                                                  Restaurants Ltd trading as:
                                                  The Ivy Collection, The Ivy
                                                  Asia, Harry’s Dolce Vita,
                                                  Harry’s Bar James Street,
                                                  Brasserie of Light and Birley
                                                  Club Group. We will contact
                                                  you about opportunities to
                                                  join us for special events as
                                                  well as information about new
                                                  seasonal menu changes you can
                                                  enjoy. We will keep your data
                                                  secure, and of course would
                                                  never sell or share data you
                                                  share with us. You can change
                                                  your mind at any time by
                                                  clicking unsubscribe on any
                                                  email you receive or by
                                                  clicking the link on our
                                                  website.
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
                                                  onClick={() =>
                                                    ReverseTableOne()
                                                  }
                                                >
                                                  <span className="color-text-green text-capitalize">
                                                    SEARCH AGAIN
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
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
                        );
                      } else if (TableFour) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                Your Booking Details
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  Booking for{" "}
                                  <span className="color-text-green">
                                    {BookingDetails.Party_Size}
                                  </span>{" "}
                                  people at{" "}
                                  <span className="color-text-green">
                                    {BookingDetails.Booking_Time}
                                    {/*{TimeConvert(BookingDetails.Booking_Time)}*/}
                                  </span>{" "}
                                  {DateGetter(BookingDetails.Booking_Date)}.
                                </p>
                              </div>
                            </header>

                            <div className="opentable opentable--details">
                              <Form>
                                <div
                                  id="reservation_sitting_wrap"
                                  className="field field--select-callback required field-select"
                                >
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="contact-form-area">
                                        <div className="row">
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Booking ID:
                                              </span>
                                              <span className="text-muted text-hover-primary goldenrod_color ">
                                                #{BookingDetails.BookingID}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Booking Time:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {BookingDetails.Booking_Time}
                                                {/*{TimeConvert(BookingDetails.Booking_Time)}*/}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Booking Date:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {DateGetter(
                                                  BookingDetails.Booking_Date
                                                )}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Party Size:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {BookingDetails.Party_Size}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                First Name:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {BookingDetails.First_Name}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Last Name:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {BookingDetails.Last_Name}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Email:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {BookingDetails.Email}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="col-12 col-lg-6">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                              <span className="font-weight-bold mr-2">
                                                Telephone Number:
                                              </span>
                                              <span className="text-muted text-hover-primary">
                                                {
                                                  BookingDetails.Telephone_Number
                                                }
                                              </span>
                                            </div>
                                          </div>

                                          <div className="col-12 text-center">
                                            <div className="underline_line" />
                                            <button
                                              className="btn"
                                              style={{
                                                background: "transparent",
                                              }}
                                              onClick={() => CancelBooking()}
                                            >
                                              <span className="color-text-green text-capitalize">
                                                Cancel Booking
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Form>
                            </div>
                            <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                          </div>
                        );
                      } else if (CancelBookingCheck) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                Your Booking is Cancelled
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  We are sorry that you have cancelled the
                                  booking{" "}
                                </p>
                                <p>You can Still make a new reservation</p>
                              </div>
                            </header>
                            <div className="opentable opentable--search">
                              <Form>
                                <div
                                  id="reservation_sitting_wrap"
                                  className="field field--select-callback required field-select"
                                >
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="contact-form-area">
                                        <div className="row">
                                          <div className="col-12 text-center mt-4">
                                            <button
                                              className="btn btn-outline-success"
                                              onClick={() => setShow(true)}
                                            >
                                              Make a new reservation
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Form>
                            </div>
                            <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                          </div>
                        );
                      }
                      //Cancel Booking Via Email id
                      else if (CancelBookingEmail) {
                        return (
                          <Fragment>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                CHOOSE A Booking to Cancel
                              </h1>
                              <div className="richtext engine__intro">
                                <p>
                                  {" "}
                                  You can reach us anytime via email or Phone
                                  number
                                </p>
                              </div>
                            </header>
                            <div className="opentable opentable--search">
                              {/*CARD*/}
                              <div className="row text-center">

                              {BookingEmails.cancelBookingsData.filter(
                                (arr) => arr.Status_booking === "Confirmed"
                              ).length === 0 ? (
                                  <div className="col-12">
                                    <p>No booking details found</p>
                                  </div>
                              ) : (
                                BookingEmails.cancelBookingsData
                                  .filter(
                                    (arr) => arr.Status_booking === "Confirmed"
                                  )
                                  .map((arr, key) => (
                                    <div key={key} style={{width:'100%'}} className="col-12 col-lg-6 mt-3  col d-flex justify-content-center">
                                      <Card
                                        style={{
                                          textAlign: "left",
                                          width: "18rem",
                                        }}
                                      >
                                        <Card.Body>
                                          <Card.Text>
                                            Booking ID:{" "}
                                            <span className="goldenrod_color">
                                              #{arr.BookingID}
                                            </span>
                                          </Card.Text>
                                          <Card.Text>
                                            Name:&nbsp;
                                            <span className="text-capitalize">
                                              {arr.First_Name}&nbsp;
                                              {arr.Last_Name}
                                            </span>
                                            <br />
                                            Party Size:&nbsp;{arr.Party_Size}
                                            <br />
                                            Email:&nbsp;{arr.Email}
                                            <br />
                                            {arr.Booking_Time} at{" "}
                                            {DateGetter(arr.Booking_Date)}
                                            <button
                                              onClick={() =>
                                                dispatch(
                                                  CancelBookingViaBID(
                                                    arr.BookingID
                                                  )
                                                )
                                              }
                                              className="btn btn-outline-danger opentable-slots__time"
                                            >
                                              <span>Cancel Booking</span>
                                            </button>
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  ))
                              )}
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
                          </Fragment>
                        );
                      } else if (CancelBookingBool) {
                        return (
                          <div>
                            <header className="engine__header">
                              <h1 className="title color-text-green">
                                Cancel A booking
                              </h1>
                              <div className="richtext engine__intro">
                                <p>Oops! What went wrong?.</p>
                                <p>
                                  You can cancel your booking by either{" "}
                                  <span className="color-text-green">
                                    Email
                                  </span>{" "}
                                  or{" "}
                                  <span className="color-text-green">
                                    Booking ID
                                  </span>
                                </p>
                              </div>
                            </header>
                            <div className="opentable opentable--search">
                              <Formik
                                validationSchema={schemaCancelBooking}
                                onSubmit={(values) => cancelBooking(values)}
                                initialValues={{
                                  Email: "",
                                  BookingID: "",
                                }}
                              >
                                {({
                                  handleSubmit,
                                  handleChange,
                                  values,
                                  touched,
                                  errors,
                                  setFieldValue,
                                }) => (
                                  <Form noValidate onSubmit={handleSubmit}>
                                    <div
                                      id="reservation_sitting_wrap"
                                      className="field field--select-callback required field-select"
                                    >
                                      <div className="row">
                                        <div className="col-12">
                                          <div className="contact-form-area">
                                            <div className="row">
                                              <div className="col-12 col-lg-5">
                                                <Form.Label className="field__label">
                                                  Email
                                                </Form.Label>
                                                <Form.Control
                                                  type="text"
                                                  className="form-control"
                                                  id="name"
                                                  name="Email"
                                                  value={values.Email}
                                                  placeholder="Email"
                                                  onKeyUp={() =>
                                                    setFieldValue(
                                                      "BookingID",
                                                      ""
                                                    )
                                                  }
                                                  isInvalid={!!errors.Email}
                                                  onChange={handleChange}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                  {errors.Email}
                                                </Form.Control.Feedback>
                                              </div>
                                              <div className="col-12 col-lg-2 text-center">
                                                <Form.Label className="field__label">
                                                  <span className="color-text-green">
                                                    -{" "}
                                                  </span>
                                                  OR
                                                  <span className="color-text-green">
                                                    {" "}
                                                    -
                                                  </span>
                                                </Form.Label>
                                              </div>

                                              <div className="col-12 col-lg-5">
                                                <Form.Label className="field__label">
                                                  Booking Id
                                                </Form.Label>
                                                <div className="input-group mb-3">
                                                  <div className="input-group-prepend">
                                                    <span
                                                      className="input-group-text"
                                                      id="basic-addon1"
                                                    >
                                                      #
                                                    </span>
                                                  </div>
                                                  <Form.Control
                                                    style={{
                                                      width: "50%",
                                                      marginBottom: "0px",
                                                    }}
                                                    type="text"
                                                    value={values.BookingID}
                                                    onChange={handleChange}
                                                    onKeyUp={() =>
                                                      setFieldValue("Email", "")
                                                    }
                                                    isInvalid={
                                                      !!errors.BookingID
                                                    }
                                                    name="BookingID"
                                                    className="form-control"
                                                    placeholder="Booking ID"
                                                  />
                                                  <Form.Control.Feedback type="invalid">
                                                    {errors.BookingID}
                                                  </Form.Control.Feedback>
                                                  <Form.Text
                                                    id="passwordHelpBlock"
                                                    muted
                                                  >
                                                    Booking ID is case Sensitive
                                                  </Form.Text>
                                                </div>
                                              </div>
                                              <div className="col-12 text-center mt-4">
                                                <button
                                                  className="btn btn-danger"
                                                  type="submit"
                                                  // onClick={(e)=>cancelBooking(e)}
                                                >
                                                  Cancel booking
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </div>
                            <i className="icon icon--calendar-white opentable-search__datepicker-icon"></i>
                            <header className="engine__header">
                              <div className="engine__intro"></div>
                            </header>
                            <button
                              className="btn"
                              style={{ background: "transparent" }}
                              onClick={() => StartReservation()}
                            >
                              <span className="color-text-green text-capitalize">
                                Make a reservation
                              </span>
                            </button>
                          </div>
                        );
                      }
                    })()}
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
