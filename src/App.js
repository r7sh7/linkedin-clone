import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import { auth } from './config/firebase';
import Login from './screens/AuthScreen/Login';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { login, logout } from './store/authActions';
import { LOGIN, LOGOUT } from './store/authConstants';

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   auth.onAuthStateChanged(userAuth => {
  //     if(userAuth){
  //       console.log(userAuth);
  //       dispatch({ 
  //         type: LOGIN, 
  //         payload: {
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           name: userAuth.displayName,
  //           profilePic: userAuth.photoURL
  //       }});
  //     }else{
  //       dispatch({ type: LOGOUT});
  //     }
  //   })
  // }, []);

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
