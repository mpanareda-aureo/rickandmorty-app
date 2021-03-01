import "./App.css";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Characters from "../Characters/Characters";
import useToken from "../../hooks/useToken";
import { fetchUser } from "../../store/actions/users";
import NotFound from "../NotFound/NotFound";

function App() {
  const { token, setToken } = useToken();

  // get user
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser(token));
  }, [token, dispatch]);

  const handleDisconnect = () => {
    setToken(null);
  };

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Rick & Morty Characters APP</h1>
          <div className="App-user">
            <div>{user.data.email}</div>
            <button className="App-disconnect" onClick={handleDisconnect}>
              log out
            </button>
          </div>
        </div>
      </header>
      <main>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Characters />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default connect()(App);
