import React from "react";
import StackGrid from "react-stack-grid";
import Modal from "./Modal";
import ImageCard from "./ImageCard";
import Pagination from "./Pagination";
import Error from "./Error";

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
            this.props.images.length === 0 ? (
                <Error searchTerm={this.props.currentSearch} />
            ) : (
                <div id="ImageList">
                    {
                        this.props.pagination.display === true ? <Pagination pagination={this.props.pagination} onPageChange={this.onPageChange} browserWidth={this.props.browserWidth}/> : null
                    }
                    <StackGrid className="image-grid" monitorImagesLoaded={true} columnWidth={this.calculateColumnWidth()} gutterHeight={5}>
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
                        this.props.pagination.display === true ? <Pagination pagination={this.props.pagination} onPageChange={this.onPageChange} browserWidth={this.props.browserWidth}/> : null
                    }
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
        )
    }
}

export default ImageList;