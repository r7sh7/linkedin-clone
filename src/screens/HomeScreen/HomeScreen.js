import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/Sidebar/SideBar";
import Widget from "./components/Widgets/Widgets";
import "./HomeScreen.css";

function HomeScreen() {
  const user = useSelector((state) => state.user);
  if (!user) return <Redirect to="/" />;
  return (
    <div className="home__body">
      <div className="home__bodyContainer">
        <SideBar />
        <Feed />
      </div>
      <Widget />
    </div>
  );
}

export default HomeScreen;
