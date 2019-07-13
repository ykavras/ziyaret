import {
  GET_NOTES_DEFAULT,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  NOTES_CHANGED,
  POST_NOTES_REQUEST,
  POST_NOTES_SUCCESS,
  POST_NOTES_FAILURE,
} from "../actions/types";

const INITIAL_STATE = {
  isNotes: true,
  notesErrorMessage: null,
  notes: null,
  text: '',
  isPostNote: false,
  postNoteErrorMessage: null,
  postNote: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTES_DEFAULT: return {
      isNotes: true,
      notesErrorMessage: null,
      notes: null,
      text: '',
      isPostNote: false,
      postNoteErrorMessage: null,
      postNote: null,
    };

    case GET_NOTES_REQUEST: return { ...state, isNotes: true, notesErrorMessage: null, notes: null };
    case GET_NOTES_SUCCESS: return { ...state, isNotes: false, notes: payload, text: '' };
    case GET_NOTES_FAILURE: return { ...state, isNotes: false, notesErrorMessage: payload };

    case NOTES_CHANGED: return { ...state, text: payload };

    case POST_NOTES_REQUEST: return { ...state, isPostNote: true, postNoteErrorMessage: null, postNote: null };
    case POST_NOTES_SUCCESS: return { ...state, isPostNote: false, postNote: payload, text: '' };
    case POST_NOTES_FAILURE: return { ...state, isPostNote: false, postNoteErrorMessage: payload };
    default:
      return state;
  }
}