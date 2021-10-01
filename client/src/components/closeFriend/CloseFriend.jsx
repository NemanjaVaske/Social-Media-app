import './closeFriend.css';

const CloseFriend=({user})=>{
    return(
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src="http://localhost:3000/assets/person/noAvatar.png" alt="" />
          <span className="sidebarFriendName">close friend</span>
        </li>
    );
}

export default CloseFriend;