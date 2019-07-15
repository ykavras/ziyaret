import {
  DEALERS_REQUEST,
  DEALERS_SUCCESS,
  DEALERS_FAILURE,
  SITES_GET_REQUEST,
  SITES_GET_SUCCESS,
  SITES_GET_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  isDealers: true,
  dealersErrorMessage: null,
  dealers: null,
  isSites: true,
  sitesErrorMessage: null,
  sites: null
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DEALERS_REQUEST:
      return { ...state, isDealers: true, dealersErrorMessage: null, dealers: null };
    case DEALERS_SUCCESS:
      return { ...state, isDealers: false, dealers: payload };
    case DEALERS_FAILURE:
      return { ...state, isDealers: false, dealersErrorMessage: payload };

    case SITES_GET_REQUEST:
      return { ...state, isSites: true, sitesErrorMessage: null, sites: null };
    case SITES_GET_SUCCESS:
      return { ...state, isSites: false, sites: payload };
    case SITES_GET_FAILURE:
      return { ...state, isSites: false, sitesErrorMessage: payload };
    default:
      return state;
  }
}