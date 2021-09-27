import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventIcon from "@material-ui/icons/Event";
import FlipMove from "react-flip-move";

import "./Feed.css";
import InputOption from "../../../../components/Input Options/InputOption";
import Post from "./Post";
import { db } from "../../../../config/firebase";
import PostModal from "../../../../components/PostModal/PostModal";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

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

  return (
    <div className="feed">
      <PostModal showModal={showModal} closeModal={handleClick} />
      <div className="feed__inputContainer">
        <div className="feed__inputHeader">
          <Avatar src={user.photoURL}>{user.displayName[0]}</Avatar>
          <button onClick={handleClick}>Start a post</button>
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
