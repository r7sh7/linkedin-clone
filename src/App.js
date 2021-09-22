import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Login from './screens/AuthScreen/Login';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {

  const user = useSelector(state => state.user);
  
  return (
    <div className="app">
        <Header />
        {user? <HomeScreen /> : <Login />}
    </div>
  );
}

export default App;
