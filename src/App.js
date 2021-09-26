import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import Login from './screens/AuthScreen/Login';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { getUserAuth } from './store/authActions';
import LoginRegister from './screens/AuthScreen/Login_Register';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);
  

  return (
    <Router>
      <div className="app">
         <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/register" component={LoginRegister}/>
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
