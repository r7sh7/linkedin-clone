import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import Widget from './Widgets';

function App() {
  return (
    <div className="app">
        <Header />
          <div className="app__body">
              <SideBar />
              <Feed />
              <Widget />
          </div>
    </div>
  );
}

export default App;
