import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import './HeaderOption.css';

const HeaderOption = ({ Icon, avatar, title, logout }) => {
    const user = useSelector(state => state.user);

    return (  
        <div className="headerOption" onClick={logout}>
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && (<Avatar className="headerOption__icon" src={user?.profilePic}>{user?.name[0]}</Avatar>)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
}
 
export default HeaderOption;