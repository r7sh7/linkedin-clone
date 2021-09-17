import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventIcon from '@material-ui/icons/Event';

import './Feed.css'
import InputOption from './InputOption';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">submit</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={InsertPhotoIcon} color="#70B5F9" title="Photo"/>
                    <InputOption Icon={YouTubeIcon} color="#7FC15E" title="Video"/>
                    <InputOption Icon={EventIcon} color="#E7A33E" title="Event"/>
                    <InputOption Icon={CalendarViewDayIcon} color="#ffadad" title="Write article"/>
                </div>
            </div>
        </div>
    )
}

export default Feed;
