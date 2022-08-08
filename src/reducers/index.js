import { combineReducers } from "redux";
import InstagramPosts from "./InstagramReducers";
import errors from "./errors";
import message from "./message";
import CarouselPosts from "./CarouselReducers";
import TimingsArray from "./TimingReducers";
import AboutUsArray from "./AboutusReducers";
import HomePageImg from "./HomePageImgReducers";

export default combineReducers({
  InstagramPosts,
  AboutUsArray,
  TimingsArray,
  CarouselPosts,
  HomePageImg,
  errors,
  message,
});
