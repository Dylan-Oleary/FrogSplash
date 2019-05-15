import React from "react";
import FontAwesome from "react-fontawesome";
// import "./ButtonUI.scss";

class ButtonUI extends React.Component {
    render(){
        return (
            <div id="ButtonUI">
                <FontAwesome className="control-button photographer-toggle" name="id-card" onClick={() => this.props.onTogglePhotographer()} />
                <FontAwesome className="control-button close" name="window-close" onClick={() => this.props.onClose()} />
            </div>
        )
    }
}

export default ButtonUI;