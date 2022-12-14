import { CREATE_MESSAGE, GET_MESSAGE } from "../actions/types";

const initialState = {};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
