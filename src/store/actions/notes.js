import {
  GET_NOTES_DEFAULT,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  NOTES_CHANGED,
  POST_NOTES_REQUEST,
  POST_NOTES_SUCCESS,
  POST_NOTES_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const getNotes = () => {
  return async dispatch => {
    dispatch(fetchingRequest(GET_NOTES_REQUEST));
    try {
      const response = await api.get('notes/');
      const payload = await response.data;
      dispatch(fetchingSuccess(GET_NOTES_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(GET_NOTES_FAILURE, error.response));
    }
  }
};

export const postNote = (text) => {
  return async dispatch => {
    dispatch(fetchingRequest(POST_NOTES_REQUEST));
    try {
      const response = await api.post('notes/', { text });
      const payload = await response.data;
      dispatch(fetchingSuccess(POST_NOTES_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(POST_NOTES_FAILURE, error.response));
    }
  }
};

export const notesChanged = (text) => { return { type: NOTES_CHANGED, payload: text } };
export const notesDefault = () => { return async dispatch => { dispatch(fetchingRequest(GET_NOTES_DEFAULT)); } };