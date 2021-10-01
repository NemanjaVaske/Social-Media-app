import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Topbar=()=>{

    const { user } = useContext(AuthContext);

    const handleLogout = () =>{
        localStorage.setItem("user", JSON.stringify(''));
        window.location.reload();
    }
    
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Nelesocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link style={{textDecoration: "none", color: "white"}} to="/">
                    <span className="topbarLink">Home</span>
                    </Link>
                    <Link style={{textDecoration: "none", color: "white"}} to={`/profile/${user.username}`}>
                    <span className="topbarLink">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                {/* <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture? `/assets/${user.profilePicture}`: "/assets/person/noAvatar.png"} alt="" className="topbarImg" />
                </Link> */}
                <div className="topbarLink" onClick={handleLogout}>Logout</div>
            </div>
        </div>
    );
}

export default Topbar;