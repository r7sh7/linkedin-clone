import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import { auth } from './config/firebase';
import Login from './screens/AuthScreen/Login';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { LOGIN, LOGOUT } from './store/authConstants';

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch({ 
          type: LOGIN, 
          payload: {
            email: userAuth.email,
            uid: userAuth.uid,
            name: userAuth.displayName,
            profilePic: userAuth.photoURL
        }})
      }else{
        dispatch({ type: LOGOUT})
      }
    })
  }, [dispatch])

  return (
    <div className="app">
        <Header />
        {user? <HomeScreen /> : <Login />}
    </div>
  );
}

export default App;
