import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./App.css";
import Login from "./screens/MainScreen/MainScreen";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { getUserAuth } from "./store/authActions";
import LoginRegister from "./screens/AuthScreen/Register";
import SignIn from "./screens/AuthScreen/SignIn";
import WipScreen from "./screens/WIPScreen/WipScreen";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);

  const Layout = ({ children }) => {
    return (
      <>
        <Header />
        {children}
      </>
    );
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {user ? (
              <Layout>
                <HomeScreen />
              </Layout>
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/register" component={LoginRegister} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/wip">
            <Layout>
              <WipScreen />
            </Layout>
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
