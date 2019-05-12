import React from "react";
import FontAwesome from "react-fontawesome";
import "./CarouselController.scss";

class CarouselController extends React.Component {
    render(){
        return (
            <div id="CarouselController">
                <FontAwesome className="carousel-arrow" name="chevron-left" onClick={() => this.props.changeImage("prev")} />
                <FontAwesome className="carousel-arrow" name="chevron-right" onClick={() => this.props.changeImage("next")} />
            </div>
        )
    }
}

export default CarouselController;