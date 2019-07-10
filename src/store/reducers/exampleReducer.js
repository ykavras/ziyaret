import {
  EXAMPLE_REQUEST,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAILURE,
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
  blockName: '',
  flatNo: '',
  interViewResult: '',
  interViewResultDetail: '',
  revisitTime: '',
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
    case EXAMPLE_REQUEST:
      return { ...state, isHome: false, isHomeErrorMessage: null, home: null };
    case EXAMPLE_SUCCESS:
      return { ...state, isHome: false, home: payload };
    case EXAMPLE_FAILURE:
      return { ...state, isHome: false, isHomeErrorMessage: payload };
    case NAME_CHANGED:
      return { ...state, name: '' };
    case SURNAME_CHANGED:
      return { ...state, surname: '' }
    case PHONE_CHANGED:
      return { ...state, phone: '' }
    case PRESENT_CHANGED:
      return { ...state, present: '' }
    case REFERER_FIRSTNAME_CHANGED:
      return { ...state, refererFirstName: '' }
    case REFERER_LASTNAME_CHANGED:
      return { ...state, refererLastName: '' }
    case REFERER_PHONE_CHANGED:
      return { ...state, refererPhone: '' }
    case STAND_AREA_CHANGED:
      return { ...state, standArea: '' }
    case STAND_TIME_CHANGED:
      return { ...state, standTime: '' }
    case STAND_NAME_CHANGED:
      return { ...state, standName: '' }
    case BLOCK_NAME_CHANGED:
      return { ...state, blockName: '' }
    case FLAT_NO_CHANGED:
      return { ...state, flatNo: '' }
    case INTERVIEW_RESULT_CHANGED:
      return { ...state, interViewResult: '' }
    case INTERVIEW_RESULT_DETAIL_CHANGED:
      return { ...state, interViewResultDetail: '' }
    case REVISIT_TIME_CHANGED:
      return { ...state, revisitTime: '' }
    case OTHER_ISS_CHANGED:
      return { ...state, otherIss: '' }
    case FILE_CHANGED:
      return { ...state, file: null }
    case PHOTO_CHANGED:
      return { ...state, photo: null }
    case VOICE_CHANGED:
      return { ...state, voice: null }
    case LONG_CHANGED:
      return { ...state, long: '' }
    case LAT_CHANGED:
      return { ...state, lat: '' }
    case OFFERED_PRODUCT_CHANGED:
      return { ...state, offeredProduct: null }
    default:
      return state;
  }
}
