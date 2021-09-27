import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <p>LinkedIn News</p>
        <InfoIcon />
      </div>
      {newsArticle("The 25 startups to watch", "Top news - 36,283 readers")}
      {newsArticle("What not to say in an email", "Top news - 36,283 readers")}
      {newsArticle("The 25 startups to watch", "Top news - 36,283 readers")}
      {newsArticle("The 25 startups to watch", "Top news - 36,283 readers")}
      {newsArticle("The 25 startups to watch", "Top news - 36,283 readers")}
      <div className="widgets__bottom">
        <h4>Show more</h4>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Widget;
