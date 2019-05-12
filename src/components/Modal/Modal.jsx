import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import ButtonUI from "../ButtonUI/ButtonUI";
import CarouselController from "../CarouselController/CarouselController";
import "./Modal.scss";

class Modal extends React.Component {
    state = {
        dataIndex: 0,
        showPhotographerBlock: false,
        currentImage: this.props.currentImage
    }

    componentDidMount(){
        const imageList = this.props.images;
        const currentImage = this.props.currentImage;

        //If iterated ID is equal to the ID of the props.image
        //assign its index in the array to the data index of our Modal
        for(let [index,image] of imageList.entries()){
            if(image.id === currentImage.id){
                this.setState({
                    dataIndex: index,
                    currentImage: image
                });
            }
        }
    }

    togglePhotographerCard = () => {
        this.state.showPhotographerBlock === false ? (
            this.setState({ showPhotographerBlock: true })
        ) : (
            this.setState({ showPhotographerBlock: false })
        )
    }

    changeImage = direction => {
        const imageList = this.props.images;

        direction === "next" ? (
            this.state.dataIndex + 1 === imageList.length ? (
                this.setState({
                    dataIndex: 0,
                    currentImage: imageList[0]
                })
            ) : (
                this.setState({
                    dataIndex: this.state.dataIndex + 1,
                    currentImage: imageList[this.state.dataIndex + 1]
                })
            )
        ):(
            this.state.dataIndex - 1 < 0 ? (
                this.setState({
                    dataIndex: imageList.length - 1,
                    currentImage: imageList[imageList.length - 1]
                })
            ) : (
                this.setState({
                    dataIndex: this.state.dataIndex - 1,
                    currentImage: imageList[this.state.dataIndex - 1]
                })
            )
        );
    }

    render(){
        return (
            <div id="Modal">
                <div className="modal-body">
                    <ImageCard 
                        id="ModalImageCard" 
                        image={this.state.currentImage} 
                        isInModal={true}
                        isShowingPhotographer={this.state.showPhotographerBlock}
                    />
                    <ButtonUI 
                        onClose={this.props.closeModal} 
                        onTogglePhotographer={this.togglePhotographerCard}
                    />
                </div>
                <CarouselController changeImage={this.changeImage} />
                <div className="modal-background"></div>
            </div>
        )
    }
}
export default Modal;