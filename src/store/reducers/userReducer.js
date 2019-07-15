import {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  isUser: true,
  userErrorMessage: null,
  user: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_GET_REQUEST:
      return { ...state, isUser: true, userErrorMessage: null, user: null };
    case USER_GET_SUCCESS:
      return { ...state, isUser: false, user: payload };
    case USER_GET_FAILURE:
      return { ...state, isUser: false, userErrorMessage: payload };
    default:
      return state;
  }
}