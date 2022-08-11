import {
  ERROR_MENU_POST,
  GET_MENU_POST,
  LOADING_MENU_POST,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  Menu: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_POST:
      return {
        ...state,
        Menu: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_MENU_POST:
      return {
        ...state,
        Menu: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_MENU_POST:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        Menu: [],
      };
    default:
      return state;
  }
}
