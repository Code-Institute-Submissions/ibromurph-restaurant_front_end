import { GET_FIND_US, FIND_US_LOADING, ERROR_FIND_US } from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  findUsArray: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FIND_US:
      return {
        ...state,
        findUsArray: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case FIND_US_LOADING:
      return {
        ...state,
        findUsArray: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_FIND_US:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        findUsArray: [],
      };
    default:
      return state;
  }
}
