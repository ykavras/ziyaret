import {
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const getUser = (username, password) => {
  const data = { username, password };
  return async dispatch => {
    dispatch(fetchingRequest(USER_GET_REQUEST));
    try {
      const response = await api.get('users/', data);
      const payload = await response.data;
      dispatch(fetchingSuccess(USER_GET_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(USER_GET_FAILURE, error.response));
    }
  }
};