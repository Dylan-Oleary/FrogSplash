import React from "react";
import StackGrid from "react-stack-grid";
import Modal from "./Modal";
import ImageCard from "./ImageCard";
import Pagination from "./Pagination";

class ImageList extends React.Component {
    state = {
        formattedImages: [],
        showModal: false
    }
    
    onPageChange = newPage => {
        this.props.onPageChange(this.props.currentSearch, newPage)
    }

    showModal = image => {
        this.setState({
            showModal: true,
            modalImage: image
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    calculateColumnWidth = () => {
        const browserWidth = this.props.browserWidth;

        if(browserWidth < 425){
            return "100%";
        } else if(browserWidth >= 425 && browserWidth < 1024){
            return "50%";
        } else {
            return "33.33%";
        }
    }
    
    render(){
        return (
            <div id="ImageList">
                {
                    this.props.pagination.display === true ? <Pagination pagination={this.props.pagination} onPageChange={this.onPageChange} /> : null
                }
                <StackGrid monitorImagesLoaded={true} columnWidth={this.calculateColumnWidth()} gutterHeight={2}>
                {
                    this.props.images.map(image => {
                        return (
                            <div className="card-wrapper" onClick={() => this.showModal(image)} key={image.id}>
                                <ImageCard id={"GridImageCard"} image={image}/>
                            </div>
                        )
                    })
                }
                </StackGrid>
                {
                    this.state.showModal === true ? (
                        <Modal 
                            isOpen={this.state.showModal}
                            currentImage={this.state.modalImage}
                            images={this.props.images}
                            closeModal={this.closeModal}
                        />
                    ) : null
                }
            </div>
  
        )
    }
}

export default ImageList;