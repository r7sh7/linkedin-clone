import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './SideBar.css';

function SideBar() {

    const user = useSelector(state => state.user);

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
                <Avatar className="sidebar__avatar" src={user.profilePic} sx={{height: 60, width: 60}}>{user.name[0]}</Avatar>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
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
