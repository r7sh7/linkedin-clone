import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.css';
function Post({ url, name, description, message}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={url} />
                <div className="post__headerInfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
                <InputOption Icon={InsertCommentIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareIcon} title="Share" color="gray"/>
                <InputOption Icon={SendIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post;
