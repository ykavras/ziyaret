import {
  LOGIN_DEFAULT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_USERNAME_CHANGED,
  LOGIN_PASSWORD_CHANGED,
} from "../actions/types";

const INITIAL_STATE = {
  username: '',
  password: '',
  isLogin: false,
  loginErrorMessage: null,
  login: null,
  token: '',
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_DEFAULT:
      return { ...state, isLogin: false, loginErrorMessage: null, login: null, username: '', password: '' };
    case LOGIN_REQUEST:
      return { ...state, isLogin: true, loginErrorMessage: null, login: null };
    case LOGIN_SUCCESS:
      return { ...state, isLogin: false, login: payload, username: '', password: '', token: payload.token };
    case LOGIN_FAILURE:
      return { ...state, isLogin: false, loginErrorMessage: payload };
    case LOGIN_USERNAME_CHANGED:
      return { ...state, username: payload };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, password: payload };
    default:
      return state;
  }
}