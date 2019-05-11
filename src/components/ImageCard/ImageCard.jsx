import React, { Fragment } from "react";
import ButtonUI from "../ButtonUI/ButtonUI";
import PhotographerCard from "../PhotographerCard/PhotographerCard";
import "./ImageCard.scss";

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
                    this.props.isInModal === true ? (
                        <Fragment>
                            <PhotographerCard photographer={photographer} display={this.state.isShowingPhotographer}/>
                            <h2 className="polaroid-marker">{`Shot By: ${photographer.name}`}</h2>
                            <ButtonUI onClose={this.props.closeModal} onTogglePhotographer={this.togglePhotographerCard}/>
                        </Fragment>
                    ) : null
                }
            </div>
        )
    }
}

export default ImageCard;