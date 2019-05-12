import React from "react";
import StackGrid from "react-stack-grid";
import Modal from "../Modal/Modal";
import ImageCard from "../ImageCard/ImageCard";
import Pagination from "../Pagination/Pagination";

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
    
    render(){
        return (
            <div id="ImageList">
                {
                    this.props.pagination.display === true ? <Pagination pagination={this.props.pagination} onPageChange={this.onPageChange} /> : null
                }
                <StackGrid monitorImagesLoaded={true} columnWidth={"33.33%"} gutterHeight={2}>
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