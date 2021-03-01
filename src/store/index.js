import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { favsReducer, favsInitialState } from "./reducers/favsReducer";
import { usersReducer, usersInitialState } from "./reducers/usersReducer";
import {
  charactersReducer,
  charactersInitialState,
} from "./reducers/charactersReducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const allReducers = combineReducers({
  favs: favsReducer,
  characters: charactersReducer,
  user: usersReducer,
});
const initialState = {
  favs: favsInitialState,
  characters: charactersInitialState,
  user: usersInitialState,
};

const store = createStore(
  allReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
