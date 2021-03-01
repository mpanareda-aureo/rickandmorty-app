export const USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const USERS_STARTED = "FETCH_USERS_STARTED";
export const USERS_FAILURE = "FETCH_USERS_FAILURE";

const api_url = process.env.REACT_APP_API_URL + "users";

export const fetchUser = (token) => {
  return (dispatch) => {
    dispatch(fetchUserStarted());
    const requestOptions = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    fetch(api_url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchUserSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};

const fetchUserSuccess = (user) => ({
  type: USERS_SUCCESS,
  payload: user,
});

const fetchUserStarted = () => ({
  type: USERS_STARTED,
});

const fetchUserFailure = (error) => ({
  type: USERS_FAILURE,
  payload: {
    error,
  },
});
