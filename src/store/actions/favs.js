export const FAVS_SUCCESS = "FETCH_FAVS_SUCCESS";
export const FAVS_STARTED = "FETCH_FAVS_STARTED";
export const FAVS_FAILURE = "FETCH_FAVS_FAILURE";

const api_url = process.env.REACT_APP_API_URL + "favs";

export const fetchFavs = (token) => {
  return (dispatch) => {
    dispatch(fetchFavsStarted());
    const requestOptions = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    fetch(api_url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchFavsSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchFavsFailure(err.message));
      });
  };
};

export const updateFav = (token, id, add = true) => {
  return (dispatch) => {
    dispatch(fetchFavsStarted());
    const requestOptions = {
      method: add ? "POST" : "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ id: id }),
    };
    fetch(api_url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchFavsSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchFavsFailure(err.message));
      });
  };
};

const fetchFavsSuccess = (favs) => ({
  type: FAVS_SUCCESS,
  payload: favs,
});

const fetchFavsStarted = () => ({
  type: FAVS_STARTED,
});

const fetchFavsFailure = (error) => ({
  type: FAVS_FAILURE,
  payload: {
    error,
  },
});
