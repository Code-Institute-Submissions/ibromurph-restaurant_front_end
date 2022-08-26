import {
  ERROR_SOCIAL_MEDIA,
  GET_SOCIAL_MEDIA,
  LOADING_SOCIAL_MEDIA,
} from "../actions/types";

const initialState = {
  isLoading: false,
  isFailed: false,
  SocialMedia: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SOCIAL_MEDIA:
      return {
        ...state,
        SocialMedia: action.payload,
        isLoading: false,
        isFailed: false,
      };
    case LOADING_SOCIAL_MEDIA:
      return {
        ...state,
        SocialMedia: [],
        isLoading: true,
        isFailed: false,
      };

    case ERROR_SOCIAL_MEDIA:
      return {
        ...state,
        isFailed: true,
        isLoading: false,
        SocialMedia: [],
      };
    default:
      return state;
  }
}
