import React from "react";
import FontAwesome from "react-fontawesome";
import "./PhotographerCard.scss";

class PhotographerCard extends React.Component {
    render(){
        const photographer = this.props.photographer;

        const displayClass = this.props.display === true ? "photographer-show" : "photographer-hide"
        const bodyDisplayClass = this.props.display === true ? "photographer-block-show" : "photographer-block-hide"
        
        return(
            <div className={`photographer-block ${displayClass}`}>
                <div className={`profile-picture ${bodyDisplayClass}`}>
                    <img src={photographer.profile_image.large}></img>
                </div>
                <div className={`menu-content ${bodyDisplayClass}`}>
                    <p className="menu-title">{photographer.name}</p>
                    <p className="menu-text">{photographer.bio}</p>
                    <div className="menu-social">
                        <a href={`https://www.instagram.com/${photographer.instagram_username}/`}><FontAwesome name="instagram" size="2x"/></a>
                        <a href={`https://www.twitter.com/${photographer.twitter_username}/`}><FontAwesome name="twitter" size="2x"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotographerCard;