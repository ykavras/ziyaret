import {
  EXAMPLE_REQUEST,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  isHome: false,
  isHomeErrorMessage: null,
  home: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case EXAMPLE_REQUEST:
    return {
      ...state, isHome: false, isHomeErrorMessage: null, home: null,
    };
  case EXAMPLE_SUCCESS:
    return { ...state, isHome: true, home: payload };
  case EXAMPLE_FAILURE:
    return { ...state, isHome: false, isHomeErrorMessage: payload };
  default:
    return state;
  }
}
