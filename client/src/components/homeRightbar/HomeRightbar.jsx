import './homerightbar.css';

const HomeRightbar=()=>{
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Pola Foster</b> and<b> three other friends</b> have birthday today.</span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
            </div>
        </div>
            
            
        
    );
};

export default HomeRightbar;