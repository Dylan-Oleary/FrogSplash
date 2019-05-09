import React from "react";
import FontAwesome from "react-fontawesome";
import "./ButtonUI.scss";

class ButtonUI extends React.Component {


    render(){
        return (
            <div id="ButtonUI">
                <span><FontAwesome name="id-card" onClick={() => this.props.onTogglePhotographer()} /></span>
                <span><FontAwesome name="close" onClick={() => this.props.onClose()} /></span>
            </div>
        )
    }
}
export default ButtonUI;