import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventIcon from '@material-ui/icons/Event';

import './Feed.css'
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase';
import { db } from "./firebase";

function Feed() {
    const [ posts, setPosts ] = useState([]);
    const [ input, setInput ] = useState("");

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => (
                setPosts(
                    snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        })
                    )
                ))
            );
    }, []);


    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: 'Megan Fox',
            description: 'Actor',
            message: input,
            photoUrl: 'https://e3.365dm.com/20/06/2048x1152/skynews-megan-fox-actress_5019888.jpg',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button type="submit" onClick={sendPost}>submit</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={InsertPhotoIcon} color="#70B5F9" title="Photo"/>
                    <InputOption Icon={YouTubeIcon} color="#7FC15E" title="Video"/>
                    <InputOption Icon={EventIcon} color="#E7A33E" title="Event"/>
                    <InputOption Icon={CalendarViewDayIcon} color="#ffadad" title="Write article"/>
                </div>
            </div>
            <hr></hr>
            {
                posts.map(({id, data:{name, description, message, photoUrl}}) => (
                    <Post 
                        key={id}  
                        name={name} 
                        description={description}
                        message={message}
                        url={photoUrl}
                    />
                ))
            }
        </div>
    )
}

export default Feed;
