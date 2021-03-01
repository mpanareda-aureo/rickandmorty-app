export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_STARTED = "FETCH_CHARACTERS_STARTED";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

const fetchCharacters = (token, page) => {
  return (dispatch) => {
    dispatch(fetchCharactersStarted());
    const requestOptions = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    fetch("http://localhost:9000/characters?page=" + page, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchCharactersSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchCharactersFailure(err.message));
      });
  };
};

const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
});

const fetchCharactersStarted = () => ({
  type: FETCH_CHARACTERS_STARTED,
});

const fetchCharactersFailure = (error) => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: {
    error,
  },
});

export default fetchCharacters;
