import {
  ERROR_MENU_PAGE_IMG_POST,
  GET_MENU_PAGE_IMG_POST,
  LOADING_MENU_PAGE_IMG_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  MenuCarousel: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_PAGE_IMG_POST:
      return {
        ...state,
        MenuCarousel: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_MENU_PAGE_IMG_POST:
      return {
        ...state,
        MenuCarousel: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_MENU_PAGE_IMG_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        MenuCarousel: [],
      };
    default:
      return state;
  }
}
