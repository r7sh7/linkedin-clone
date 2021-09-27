import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./HeaderOption.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderOption = ({ Icon, avatar, title, logout, active }) => {
  const user = useSelector((state) => state.user);
  const headerOptionClass = active ? "headerOption active" : "headerOption";
  return (
    <div className={headerOptionClass} onClick={logout}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className="headerOption__icon"
          src={user.photoURL ? user.photoURL : ""}
        >
          {user.displayName[0]}
        </Avatar>
      )}
      {!avatar ? (
        <h3 className="headerOption__title">{title}</h3>
      ) : (
        <div className="avatar__title">
          <h3>{title}</h3>
          <ArrowDropDownIcon fontSize="medium" />
        </div>
      )}
    </div>
  );
};

export default HeaderOption;
