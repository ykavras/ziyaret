import {
  POST_INTERVIEW_REQUEST,
  POST_INTERVIEW_SUCCESS,
  POST_INTERVIEW_FAILURE,
  NAME_CHANGED,
  SURNAME_CHANGED,
  PHONE_CHANGED,
  PRESENT_CHANGED,
  REFERER_FIRSTNAME_CHANGED,
  REFERER_LASTNAME_CHANGED,
  REFERER_PHONE_CHANGED,
  STAND_AREA_CHANGED,
  STAND_TIME_CHANGED,
  STAND_NAME_CHANGED,
  SITE_NAME_CHANGED,
  BLOCK_NAME_CHANGED,
  FLAT_NO_CHANGED,
  INTERVIEW_RESULT_CHANGED,
  INTERVIEW_RESULT_DETAIL_CHANGED,
  REVISIT_TIME_CHANGED,
  OTHER_ISS_CHANGED,
  FILE_CHANGED,
  PHOTO_CHANGED,
  VOICE_CHANGED,
  LONG_CHANGED,
  LAT_CHANGED,
  OFFERED_PRODUCT_CHANGED
} from './types';
import api from '../../lib/api';

export const fetchingRequest = type => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const postInterview = (name, surname, phone, present, refererFirstName, refererLastName, refererPhone, standArea,
  standTime, standName, siteName, blockName, flatNo, interViewResult, interViewResultDetail, revisitTime, otherIss,
  file, photo, voice, long, lat, offeredProduct) => {
  const data = { name, surname, phone, present, refererFirstName, refererLastName, refererPhone, standArea,
    standTime, standName, siteName, blockName, flatNo, interViewResult, interViewResultDetail, revisitTime, otherIss,
    file, photo, voice, long, lat, offeredProduct };
  console.log(data)
  return async dispatch => {
    dispatch(fetchingRequest(POST_INTERVIEW_REQUEST));
    try {
      const response = await api.post('service_interviews/', data);
      const payload = await response.data;
      dispatch(fetchingSuccess(POST_INTERVIEW_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(POST_INTERVIEW_FAILURE, error.response));
    }
  }
};

export const nameChanged = (text) => { return { type: NAME_CHANGED, payload: text } };
export const surnameChanged = (text) => { return { type: SURNAME_CHANGED, payload: text } };
export const phoneChanged = (text) => { return { type: PHONE_CHANGED, payload: text } };
export const presentChanged = (text) => { return { type: PRESENT_CHANGED, payload: text } };
export const refererFirstNameChanged = (text) => { return { type: REFERER_FIRSTNAME_CHANGED, payload: text } };
export const refererLastNameChanged = (text) => { return { type: REFERER_LASTNAME_CHANGED, payload: text } };
export const refererPhoneChanged = (text) => { return { type: REFERER_PHONE_CHANGED, payload: text } };
export const standAreaChanged = (text) => { return { type: STAND_AREA_CHANGED, payload: text } };
export const standTimeChanged = (text) => { return { type: STAND_TIME_CHANGED, payload: text } };
export const standNameChanged = (text) => { return { type: STAND_NAME_CHANGED, payload: text } };
export const siteNameChanged = (text) => { return { type: SITE_NAME_CHANGED, payload: text } };
export const blockNameChanged = (text) => { return { type: BLOCK_NAME_CHANGED, payload: text } };
export const flatNoChanged = (text) => { return { type: FLAT_NO_CHANGED, payload: text } };
export const interViewResultChanged = (text) => { return { type: INTERVIEW_RESULT_CHANGED, payload: text } };
export const interViewResultDetailChanged = (text) => { return { type: INTERVIEW_RESULT_DETAIL_CHANGED, payload: text } };
export const revisitTimeChanged = (text) => { return { type: REVISIT_TIME_CHANGED, payload: text } };
export const otherIssChanged = (text) => { return { type: OTHER_ISS_CHANGED, payload: text } };
export const fileChanged = (text) => { return { type: FILE_CHANGED, payload: text } };
export const photoChanged = (text) => { return { type: PHOTO_CHANGED, payload: text } };
export const voiceChanged = (text) => { return { type: VOICE_CHANGED, payload: text } };
export const longChanged = (text) => { return { type: LONG_CHANGED, payload: text } };
export const latChanged = (text) => { return { type: LAT_CHANGED, payload: text } };
export const offeredProductChanged = (text) => { return { type: OFFERED_PRODUCT_CHANGED, payload: text } };

