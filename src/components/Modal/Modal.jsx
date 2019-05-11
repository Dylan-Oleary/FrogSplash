import React from "react";
import "./Modal.scss";

class Modal extends React.Component {
    render(){
        return (
            <div id="Modal">
                <div className="modal-body">
                    {this.props.children}
                </div>
                <div className="modal-background"></div>
            </div>
        )
    }
}
export default Modal;