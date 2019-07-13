import {
  LOGIN_DEFAULT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_USERNAME_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGOUT
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const login = (username, password) => {
  const data = { username, password };
  return async dispatch => {
    dispatch(fetchingRequest(LOGIN_REQUEST));
    try {
      const response = await api.post('api-token-auth/', data);
      const payload = await response.data;
      dispatch(fetchingSuccess(LOGIN_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(LOGIN_FAILURE, error.response));
    }
  }
};

export const emailChanged = (text) => {
  return {
    type: LOGIN_USERNAME_CHANGED,
    payload: text
  }
};
export const passwordChanged = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  }
};

export const loginDefault = () => {
  return async dispatch => {
    dispatch(fetchingRequest(LOGIN_DEFAULT));
  }
};

export const logout = () => {
  return { type: LOGOUT }
};