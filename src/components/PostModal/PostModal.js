import React, { useState } from "react";
import "./PostModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { db } from "../../config/firebase";
import firebase from "firebase";

function PostModal(props) {
  const [input, setInput] = useState("");
  const user = useSelector((state) => state.user);
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

  const reset = (e) => {
    setInput("");
    props.closeModal(e);
  };

  return (
    <>
      {props.showModal && (
        <div className="postmodal">
          <div className="postmodal__card">
            <div className="postmodal__header">
              <h2>Create a post</h2>
              <button onClick={reset}>
                <CloseIcon />
              </button>
            </div>
            <div className="postmodal__body">
              <div className="postmodal__userInfo">
                <Avatar src={user.photoURL}>{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
              </div>
              <textarea
                placeholder="What do you want to talk about?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              ></textarea>
            </div>
            <div className="postmodal__footer">
              <div className="postmodal__sharebuttons">
                <PhotoIcon />
                <YouTubeIcon />
              </div>
              <button
                type="submit"
                onClick={sendPost}
                disabled={!input ? true : false}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostModal;
