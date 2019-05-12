import React, { Fragment } from "react";
import PhotographerCard from "./PhotographerCard";
// import "./ImageCard.scss";

class ImageCard extends React.Component {
    state = {
        isShowingPhotographer: false,
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
                            <PhotographerCard
                                display={this.props.isShowingPhotographer}
                                photographer={photographer}
                            />
                            <h2 className="polaroid-marker">{`Shot By: ${photographer.name}`}</h2>
                        </Fragment>
                    ) : null
                }
            </div>
        )
    }
}

export default ImageCard;