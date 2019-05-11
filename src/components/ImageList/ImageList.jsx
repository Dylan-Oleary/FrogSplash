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

    showModal = (image, photographer) => {
        this.setState({
            showModal: true,
            modalImage: image,
            modalPhotographer: photographer
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
                        const photographer = image.user;
                        return (
                            <div className="card-wrapper" onClick={() => this.showModal(image, photographer)} key={image.id}>
                                <ImageCard id={"GridImageCard"} image={image}/>
                            </div>
                        )
                    })
                }
                </StackGrid>
                {
                    this.state.showModal === true ? (
                        <Modal isOpen={this.state.showModal}>
                            <ImageCard id={"ModalImageCard"} image={this.state.modalImage} isInModal={true} modalPhotographer={this.state.modalPhotographer} closeModal={this.closeModal} />
                        </Modal>
                    ) : null
                }
            </div>
  
        )
    }
}

export default ImageList;