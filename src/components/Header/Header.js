import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.css';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../store/authConstants';
import { auth } from '../../config/firebase';


const Header = () => {
    const dispatch = useDispatch();

    const logOutOfApp = () => {
        dispatch({ type: LOGOUT });
        auth.signOut();
    }
    return (  
        <div className="header">
            <div className="header__left">
                <img alt="logo" src="/images/linkedin.svg" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="/images/profile_pic.jpeg" title="Me" logout={logOutOfApp}/>
            </div>
        </div>
    );
}
 
export default Header;