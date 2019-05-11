import React from "react";
import FontAwesome from "react-fontawesome";
import "./ButtonUI.scss";

class ButtonUI extends React.Component {
    render(){
        return (
            <div id="ButtonUI">
                <FontAwesome className="control-button" name="id-card" onClick={() => this.props.onTogglePhotographer()} />
                <div className="close" onClick={() => this.props.onClose()}>
                    <FontAwesome className="control-button" name="close" />
                </div>
            </div>
        )
    }
}

export default ButtonUI;