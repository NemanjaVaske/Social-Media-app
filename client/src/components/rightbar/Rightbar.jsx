import './rightbar.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';
import { Follow, Unfollow } from '../../context/AuthActions';

const Rightbar=({user})=>{
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const[friends,setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const[followed,setFollowed] = useState(false);
    
    useEffect(()=>{
        if(user){
        const fetchFriends = async() =>{
            try {
                const friendList = await axios.get(`/users/friends/${user._id}`);
                setFriends(friendList.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchFriends();
        setFollowed(currentUser.followings.includes(user?._id));
        
    }
    },[user,currentUser]);

    const followHandler= async()=>{
        if(followed){
            await axios.put(`/users/${user._id}/unfollow`, {userId: currentUser._id});
            dispatch(Unfollow(user._id));
        }else{
            await axios.put(`/users/${user._id}/follow`, {userId: currentUser._id});
            dispatch(Follow(user._id));
        }
        setFollowed(!followed);
        console.log(currentUser);
    }
    
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
            {user.username !== currentUser.username && (
                <button className="rightbarFollowButton" onClick={followHandler} >
                    {followed? <Remove/>: <Add/>}
                    {followed? "Unfollow": "Follow"}
                    </button>
            )}
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship === 1? 'Single': user.relationship===2? 'Married': 'Complicated as hell'}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                {friends.map(friend=>(
                    
                    <div key={friend._id} className="rightbarFollowing">
                        <Link  to={`/profile/${friend.username}`}>
                        <img className="rightbarFollowingImg" src={friend?.profilePicture? PF + friend.profilePicture: PF + "person/noAvatar.png"} alt="sta" />
                        </Link>
                        <span className="rightbarFollowingName">{friend.username}</span>
                    </div>
                    
                ))}
                
            </div>
            </div>
        </div>
    );
}

export default Rightbar;