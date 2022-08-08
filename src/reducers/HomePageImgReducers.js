import {
  ERROR_HOME_PAGE_IMG_POST,
  GET_HOME_PAGE_IMG_POST,
  LOADING_HOME_PAGE_IMG_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  HomePageImg: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOME_PAGE_IMG_POST:
      return {
        ...state,
        HomePageImg: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_HOME_PAGE_IMG_POST:
      return {
        ...state,
        HomePageImg: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_HOME_PAGE_IMG_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        HomePageImg: [],
      };
    default:
      return state;
  }
}
