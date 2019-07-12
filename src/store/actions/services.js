import {
  SERVICES_REQUEST,
  SERVICES_SUCCESS,
  SERVICES_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const getServices = () => {
  return async dispatch => {
    dispatch(fetchingRequest(SERVICES_REQUEST));
    try {
      const response = await api.get('services/');
      const payload = await response.data;
      dispatch(fetchingSuccess(SERVICES_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(SERVICES_FAILURE, error.response));
    }
  }
};