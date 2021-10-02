import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./HeaderOption.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderOption = ({
  Icon,
  avatar,
  title,
  logout,
  handleHeaderOptionClick,
  popup,
  handleTogglePopup,
  active,
}) => {
  const user = useSelector((state) => state.user);
  return (
    <div
      onClick={
        handleHeaderOptionClick
          ? () => handleHeaderOptionClick(title)
          : () => handleTogglePopup()
      }
      className={active === title ? "headerOption active" : "headerOption"}
    >
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

      {avatar && popup && (
        <div className="signout__card" onClick={logout}>
          <p>Sign Out</p>
        </div>
      )}
    </div>
  );
};

export default HeaderOption;
