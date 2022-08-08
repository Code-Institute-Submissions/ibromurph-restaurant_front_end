import {
  ERROR_CAROUSEL_POST,
  GET_CAROUSEL_POST,
  LOADING_CAROUSEL_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  CarouselPosts: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CAROUSEL_POST:
      return {
        ...state,
        CarouselPosts: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_CAROUSEL_POST:
      return {
        ...state,
        CarouselPosts: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_CAROUSEL_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        CarouselPosts: [],
      };
    default:
      return state;
  }
}
