import { FAVS_SUCCESS, FAVS_STARTED, FAVS_FAILURE } from "../actions/favs";

export const favsInitialState = {
  loading: false,
  data: [],
  error: null,
};

export const favsReducer = (state = favsInitialState, { type, payload }) => {
  switch (type) {
    case FAVS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload.data,
      };
    case FAVS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FAVS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
