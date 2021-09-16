import { Avatar } from '@material-ui/core';
import React from 'react';
import './SideBar.css';

function SideBar() {

    const recentItem = (post) => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{post}</p>
      </div>  
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img alt="" src="/images/sidebar_background_img.jpg"/>
                <Avatar className="sidebar__avatar"/>
                <h2>Rishi Bolinjkar</h2>
                <h4>Front-End Web Developer</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">763</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">763</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('programming')}
                {recentItem('typescript')}
                {recentItem('blockchain')}
                {recentItem('design')}
            </div>
        </div>
    )
}

export default SideBar
