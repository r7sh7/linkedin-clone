import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/authConstants";
import { auth } from "../../config/firebase";
import { Redirect, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logOutOfApp = () => {
    dispatch({ type: LOGOUT });
    auth.signOut();
  };

  const [active, setActive] = useState("Home");
  const [popup, setPopup] = useState(false);
  const history = useHistory();

  const handleTogglePopup = () => {
    console.log(popup);
    setPopup(!popup);
    console.log(popup);
  };

  const handleHeaderOptionClick = (title) => {
    setActive(title);
    if (title !== "Home") {
      history.push("/wip");
    } else {
      history.push("/");
    }
  };

  if (!user) return <Redirect to="/" />;
  return (
    <div className="header">
      <div className="header__left">
        <img alt="logo" src="/images/linkedin.svg" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption
          Icon={HomeIcon}
          title="Home"
          active={active}
          handleHeaderOptionClick={handleHeaderOptionClick}
        />
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network"
          active={active}
          handleHeaderOptionClick={handleHeaderOptionClick}
        />
        <HeaderOption
          Icon={BusinessCenterIcon}
          title="Jobs"
          active={active}
          handleHeaderOptionClick={handleHeaderOptionClick}
        />
        <HeaderOption
          Icon={ChatIcon}
          title="Messaging"
          active={active}
          handleHeaderOptionClick={handleHeaderOptionClick}
        />
        <HeaderOption
          Icon={NotificationsIcon}
          title="Notifications"
          active={active}
          handleHeaderOptionClick={handleHeaderOptionClick}
        />
        <HeaderOption
          avatar={true}
          title="Me"
          handleTogglePopup={handleTogglePopup}
          popup={popup}
          logout={logOutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
