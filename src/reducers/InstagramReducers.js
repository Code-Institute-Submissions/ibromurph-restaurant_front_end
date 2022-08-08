import {
  ERROR_INSTAGRAM_POST,
  GET_INSTAGRAM_POST,
  LOADING_INSTAGRAM_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  InstagramPosts: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INSTAGRAM_POST:
      return {
        ...state,
        InstagramPosts: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_INSTAGRAM_POST:
      return {
        ...state,
        InstagramPosts: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_INSTAGRAM_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        InstagramPosts: [],
      };
    default:
      return state;
  }
}
