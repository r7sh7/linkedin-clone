import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <div className="app">
        <Header />
        <HomeScreen />
    </div>
  );
}

export default App;
