import React from 'react'
import Feed from './components/Feed/Feed'
import SideBar from './components/Sidebar/SideBar'
import Widget from './components/Widgets/Widgets'
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className="home__body">
              <SideBar />
                <Feed />
              <Widget />
          </div>
    )
}

export default HomeScreen
