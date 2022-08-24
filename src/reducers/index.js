import { combineReducers } from "redux";
import InstagramPosts from "./InstagramReducers";
import errors from "./errors";
import message from "./message";
import CarouselPosts from "./CarouselReducers";
import TimingsArray from "./TimingReducers";
import AboutUsArray from "./AboutusReducers";
import HomePageImg from "./HomePageImgReducers";
import MenuCarousel from "./MenuCarouselReducers";
import Menu from "./MenuReducers";
import BookingCover from "./BookingCoverReducers";
import BookingCover2 from "./BookingCover2Reducers";
import Bookings from "./BookingsReducers";
import cancelArray from "./CancelBookingbid";
import cancelBookingsData from "./CancelBookingEReducer";

export default combineReducers({
  Menu,
  errors,
  message,
  Bookings,
  HomePageImg,
  AboutUsArray,
  TimingsArray,
  MenuCarousel,
  BookingCover,
  CarouselPosts,
  BookingCover2,
  InstagramPosts,
  cancelArray,
  cancelBookingsData,
});
