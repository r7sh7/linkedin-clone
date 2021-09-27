import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import Login from "./screens/MainScreen/MainScreen";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { getUserAuth } from "./store/authActions";
import LoginRegister from "./screens/AuthScreen/Register";
import SignIn from "./screens/AuthScreen/SignIn";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={LoginRegister} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/home">
            <Header />
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
