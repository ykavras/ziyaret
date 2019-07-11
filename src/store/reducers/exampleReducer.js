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
} from '../actions/types';

const INITIAL_STATE = {
  isHome: false,
  isHomeErrorMessage: null,
  home: null,
  isPost: false,
  isPostErrorMessage: null,
  post: null,
  lat: '',
  long: '',
  name: '',
  surname: '',
  phone: '',
  present: '',
  refererFirstName: '',
  refererLastName: '',
  refererPhone: '',
  standArea: '',
  standTime: '',
  standName: '',
  siteName: '',
  blockName: '',
  flatNo: '',
  interViewResult: '',
  interViewResultDetail: '',
  revisitTime: null,
  otherIss: '',
  file: null,
  photo: null,
  voice: null,
  long: '',
  lat: '',
  offeredProduct: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    //POST INTERVIEW
    case POST_INTERVIEW_REQUEST:
      return { ...state, isPost: true, isPostErrorMessage: null, post: null };
    case POST_INTERVIEW_SUCCESS:
      return { ...state, isPost: false, post: payload };
    case POST_INTERVIEW_FAILURE:
      return { ...state, isPost: false, isPostErrorMessage: payload };
    //FIELDS
    case NAME_CHANGED:
      return { ...state, name: payload };
    case SURNAME_CHANGED:
      return { ...state, surname: payload }
    case PHONE_CHANGED:
      return { ...state, phone: payload }
    case PRESENT_CHANGED:
      return { ...state, present: payload }
    case REFERER_FIRSTNAME_CHANGED:
      return { ...state, refererFirstName: payload }
    case REFERER_LASTNAME_CHANGED:
      return { ...state, refererLastName: payload }
    case REFERER_PHONE_CHANGED:
      return { ...state, refererPhone: payload }
    case STAND_AREA_CHANGED:
      return { ...state, standArea: payload }
    case STAND_TIME_CHANGED:
      return { ...state, standTime: payload }
    case STAND_NAME_CHANGED:
      return { ...state, standName: payload }
    case SITE_NAME_CHANGED:
      return { ...state, siteName: payload }
    case BLOCK_NAME_CHANGED:
      return { ...state, blockName: payload }
    case FLAT_NO_CHANGED:
      return { ...state, flatNo: payload }
    case INTERVIEW_RESULT_CHANGED:
      return { ...state, interViewResult: payload }
    case INTERVIEW_RESULT_DETAIL_CHANGED:
      return { ...state, interViewResultDetail: payload }
    case REVISIT_TIME_CHANGED:
      return { ...state, revisitTime: payload }
    case OTHER_ISS_CHANGED:
      return { ...state, otherIss: payload }
    case FILE_CHANGED:
      return { ...state, file: payload }
    case PHOTO_CHANGED:
      return { ...state, photo: payload }
    case VOICE_CHANGED:
      return { ...state, voice: payload }
    case LONG_CHANGED:
      return { ...state, long: payload }
    case LAT_CHANGED:
      return { ...state, lat: payload }
    case OFFERED_PRODUCT_CHANGED:
      return { ...state, offeredProduct: payload }
    default:
      return state;
  }
}
