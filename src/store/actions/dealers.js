import {
  DEALERS_REQUEST,
  DEALERS_SUCCESS,
  DEALERS_FAILURE,
  SITES_GET_REQUEST,
  SITES_GET_SUCCESS,
  SITES_GET_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const getDealers = () => {
  return async dispatch => {
    dispatch(fetchingRequest(DEALERS_REQUEST));
    try {
      const response = await api.get('dealers/');
      const payload = await response.data;
      dispatch(fetchingSuccess(DEALERS_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(DEALERS_FAILURE, error.response));
    }
  }
};

export const getSites = (id) => {
  return async dispatch => {
    dispatch(fetchingRequest(SITES_GET_REQUEST));
    try {
      const response = await api.get('sites/', { dealer_id: id });
      const payload = await response.data;
      dispatch(fetchingSuccess(SITES_GET_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(SITES_GET_FAILURE, error.response));
    }
  }
};

