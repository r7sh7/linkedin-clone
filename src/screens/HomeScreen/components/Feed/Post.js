import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "../../../../components/Input Options/InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./Post.css";
import ReactPlayer from "react-player";
const Post = forwardRef(
  ({ user, description, sharedImage, video, date }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={user.photoURL}>{user.name[0]}</Avatar>
          <div className="post__headerInfo">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{date}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{description}</p>
          {sharedImage ? (
            <img
              src={sharedImage}
              alt="shared_post"
              style={{ width: "100%" }}
            />
          ) : (
            video && <ReactPlayer url={video} width="100%" />
          )}
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
          <InputOption Icon={InsertCommentIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
