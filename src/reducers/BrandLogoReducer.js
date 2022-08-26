import { GET_LOGO, LOADING_LOGO, ERROR_LOGO } from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  LogoArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LOGO:
      return {
        ...state,
        LogoArray: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_LOGO:
      return {
        ...state,
        LogoArray: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_LOGO:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        LogoArray: [],
      };
    default:
      return state;
  }
}
