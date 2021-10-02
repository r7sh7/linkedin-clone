import React, { useState } from "react";
import "./PostModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import firebase from "firebase";
import ReactPlayer from "react-player";
import { createPostApi } from "../../store/authActions";

function PostModal(props) {
  const [input, setInput] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetType, setAssetType] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const reset = (e) => {
    setInput("");
    setShareImage("");
    setVideoLink("");
    setAssetType("");
    props.closeModal(e);
  };

  const sendPost = (e) => {
    e.preventDefault();
    const post = {
      image: shareImage,
      video: videoLink,
      description: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user,
    };
    dispatch(createPostApi(post));
    reset(e);
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert(`Not an image, the file is ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetType = (type) => {
    setShareImage("");
    setVideoLink("");
    setAssetType(type);
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
              />
              {assetType === "image" ? (
                <div className="postmodal__uploadImage">
                  <input
                    type="file"
                    name="image"
                    id="file"
                    accept="image/gif, image/jpeg, image/png"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <p>
                    <label htmlFor="file">Select an image to share</label>
                  </p>
                  {shareImage && (
                    <img
                      src={URL.createObjectURL(shareImage)}
                      alt="user_image"
                    />
                  )}
                </div>
              ) : (
                assetType === "video" && (
                  <div className="postmodal__uploadVideo">
                    <input
                      type="text"
                      placeholder="Please input a video link"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                    />
                    {videoLink && <ReactPlayer url={videoLink} width="100%" />}
                  </div>
                )
              )}
            </div>
            <div className="postmodal__footer">
              <div className="postmodal__sharebuttons">
                <button onClick={() => switchAssetType("image")}>
                  <PhotoIcon />
                </button>
                <button onClick={() => switchAssetType("video")}>
                  <YouTubeIcon />
                </button>
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
