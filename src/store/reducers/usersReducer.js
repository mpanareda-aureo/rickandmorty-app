import { USERS_SUCCESS, USERS_STARTED, USERS_FAILURE } from "../actions/users";

export const usersInitialState = {
  loading: false,
  data: {},
  error: null,
};

export const usersReducer = (state = usersInitialState, { type, payload }) => {
  switch (type) {
    case USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload.data,
      };
    case USERS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
