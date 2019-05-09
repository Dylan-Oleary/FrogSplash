import React from "react";
import "./ImageCard.css";
import ButtonUI from "../ButtonUI/ButtonUI";
import PhotographerCard from "../PhotographerCard/PhotographerCard";

class ImageCard extends React.Component {
    state = {
        isShowingPhotographer: false,
    }

    togglePhotographerCard = () => {
        this.state.isShowingPhotographer === false ? (
            this.setState({ isShowingPhotographer: true})
        ) : (
            this.setState({ isShowingPhotographer: false})
        )
    }

    render(){
        const { urls, description } = this.props.image;
        const photographer = this.props.image.user;

        return (
            <div id={this.props.id}>
                <div className="image-wrapper">
                    <img src={urls.regular} alt={description} />
                </div>
                {
                    this.props.isInModal === true ? <PhotographerCard photographer={photographer} display={this.state.isShowingPhotographer}/> : null
                }
                {
                    this.props.isInModal === true ? <ButtonUI onClose={this.props.closeModal} onTogglePhotographer={this.togglePhotographerCard}/> : null
                }
            </div>
        )
    }
}

export default ImageCard;