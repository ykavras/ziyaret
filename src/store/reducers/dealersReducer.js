import {
  DEALERS_REQUEST,
  DEALERS_SUCCESS,
  DEALERS_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  isDealers: true,
  dealersErrorMessage: null,
  dealers: null,
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
    default:
      return state;
  }
}