import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventIcon from "@material-ui/icons/Event";
import FlipMove from "react-flip-move";

import "./Feed.css";
import InputOption from "../../../../components/Input Options/InputOption";
import Post from "./Post";
import firebase from "firebase";
import { db } from "../../../../config/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector((state) => state.user);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL,
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
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button type="submit" onClick={sendPost}>
              submit
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={InsertPhotoIcon} color="#70B5F9" title="Photo" />
          <InputOption Icon={YouTubeIcon} color="#7FC15E" title="Video" />
          <InputOption Icon={EventIcon} color="#E7A33E" title="Event" />
          <InputOption
            Icon={CalendarViewDayIcon}
            color="#ffadad"
            title="Write article"
          />
        </div>
      </div>
      <hr></hr>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            url={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
