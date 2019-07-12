import {
  SERVICES_REQUEST,
  SERVICES_SUCCESS,
  SERVICES_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  isServices: false,
  servicesErrorMessage: null,
  services: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case SERVICES_REQUEST:
      return { ...state, isServices: true, servicesErrorMessage: null, services: null };
    case SERVICES_SUCCESS:
      return { ...state, isServices: false, services: payload };
    case SERVICES_FAILURE:
      return { ...state, isServices: false, servicesErrorMessage: payload };
    default:
      return state;
  }
}