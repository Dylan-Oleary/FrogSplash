import React from "react";
import { ReactComponent as InstagramIcon } from "../static/svg/instagram.svg";
import { ReactComponent as TwitterIcon } from "../static/svg/twitter.svg";
class PhotographerCard extends React.Component {
    render(){
        const photographer = this.props.photographer;
        const displayClass = this.props.display === true ? "show" : "hide";
        const bodyDisplayClass = this.props.display === true ? "photographer-block-show" : "photographer-block-hide";
        
        return (
            <div id="PhotographerCard" className={`${displayClass}`}>
                <div className={`profile-picture ${bodyDisplayClass}`}>
                    <img src={photographer.profile_image.large} alt={photographer.name}></img>
                </div>
                <div className={`block-content ${bodyDisplayClass}`}>
                    <p className="block-title">{photographer.name}</p>
                    <p className="block-text">{photographer.bio}</p>
                    <div className="block-social">
                        <a href={`https://www.instagram.com/${photographer.instagram_username}/`}>
                            <InstagramIcon className="brand-icon" />
                        </a>
                        <a href={`https://www.twitter.com/${photographer.twitter_username}/`}>
                            <TwitterIcon className="brand-icon" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotographerCard;