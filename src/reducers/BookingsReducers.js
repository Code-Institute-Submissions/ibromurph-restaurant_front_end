import {
  ADD_BOOKING,
  BOOKING_DELETED,
  ERROR_BOOKINGS_POST,
  GET_BOOKINGS_POST,
  LOADING_BOOKINGS_POST,
  UPDATE_BOOKING,
} from "../actions/types";

const initialState = {
  isFailed: false,
  isLoading: false,
  Bookings: [],
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKINGS_POST:
      return {
        ...state,
        Bookings: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_BOOKINGS_POST:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    case BOOKING_DELETED:
      return {
        ...state,
        isFailed: false,
        isLoading: false,
        Bookings: state.Bookings.filter((about) => about.id !== action.payload),
      };
    case ERROR_BOOKINGS_POST:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        Bookings: state.Bookings.map((arr) => {
          if (arr.id === action.payload.id) {
            return action.payload;
          }
          return arr;
        }),
      };
    case ADD_BOOKING:
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        Bookings: [...state.Bookings, action.payload],
      };
    default:
      return state;
  }
}
