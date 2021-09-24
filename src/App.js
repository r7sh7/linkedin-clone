import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import { auth } from './config/firebase';
import Login from './screens/AuthScreen/Login';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { login, logout } from './store/authActions';

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(login(userAuth))
      }else{
        dispatch(logout())
      }
    })
  }, [dispatch]);
  

  return (
    <div className="app">
        <Header />
        {!user ? <Login /> : <HomeScreen />}
    </div>
  );
}

export default App;
