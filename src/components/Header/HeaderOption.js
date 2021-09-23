import { Avatar } from "@material-ui/core";
import './HeaderOption.css';

const HeaderOption = ({ Icon, avatar, title, logout }) => {
    return (  
        <div className="headerOption" onClick={logout}>
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && (<Avatar className="headerOption__icon" src={avatar}/>)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
}
 
export default HeaderOption;