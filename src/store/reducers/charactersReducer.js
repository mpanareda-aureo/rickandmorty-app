import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_STARTED,
  FETCH_CHARACTERS_FAILURE,
} from "../actions/characters";

export const charactersInitialState = {
  loading: false,
  data: [],
  // page: 1,
  last: false,
  error: null,
};

export const charactersReducer = (
  state = charactersInitialState,
  { type, payload }
) => {
  switch (type) {
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload.data,
        last: payload.last,
        // page: payload.page
      };
    case FETCH_CHARACTERS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
