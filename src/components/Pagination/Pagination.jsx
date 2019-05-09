import React from "react";
import FontAwesome from "react-fontawesome";
import "./Pagination.scss"

class Pagination extends React.Component {
    state = {
        customPage: ""
    }

    customPage = event => {
        event.preventDefault();

        this.props.onPageChange(parseInt(this.state.customPage));
    }

    handleInputChange = event => {
        this.setState({
            customPage: event.target.value
        });
    }

    nextPage = () => {
        this.props.onPageChange(this.props.pagination.currentPage + 1);
    }

    previousPage = () => {
        this.props.onPageChange(this.props.pagination.currentPage - 1);
    }

    firstPage = () => {
        this.props.onPageChange(1);
    }

    lastPage = () => {
        this.props.onPageChange(this.props.pagination.totalPages);
    }

    bulkPageChange = direction => {
        let newPage = 0;
        let pagesToJump = 20;
        
        if(direction === "forward"){
            if(this.props.pagination.currentPage + pagesToJump > this.props.pagination.totalPages){
                newPage = this.props.pagination.totalPages;
            }else{
                newPage = this.props.pagination.currentPage + pagesToJump;
            }
        }else{
            if(this.props.pagination.currentPage - pagesToJump < 1){
                newPage = 1;
            }else{
                newPage = this.props.pagination.currentPage - pagesToJump;
            }
        }

        this.props.onPageChange(newPage);
    }

    handlePageNumberClick = (event) => {
        let pageNumber = parseInt(event.target.textContent);

        this.props.onPageChange(pageNumber);
    }

    renderPages = () => {
        const buffer = 2;
        let pages = [];

        const pagination = {
            startAt: this.props.pagination.currentPage - buffer,
            endAt: this.props.pagination.currentPage + buffer,
            maxPageNo: this.props.pagination.totalPages
        };

        if (pagination.startAt < 1) {
            const offset = (1 - pagination.startAt);

            pagination.startAt = 1;
            pagination.endAt += offset;
        }
        if (pagination.endAt > pagination.maxPageNo) {
            const offset = (pagination.endAt - pagination.maxPageNo);

            pagination.endAt = pagination.maxPageNo;
            pagination.startAt -= offset;
            if (pagination.startAt <= 0) {
                pagination.startAt = 1;
            }
        }

        for(let i = pagination.startAt; i <= pagination.endAt; i++){
            pages.push(i)
        }
        
        return pages.map(page => {
            if(page === this.props.pagination.currentPage){
                return (
                    <span className="active pagination-number" onClick={this.handlePageNumberClick} key={`page-${page}`}>{page}</span>
                )
            }else{
                return (
                    <span className="pagination-number" onClick={this.handlePageNumberClick} key={`page-${page}`}>{page}</span>
                )
            }
        })
    }

    render(){
        return (
            <div id="Pagination">
                <div className="pagination-wrapper">
                    <span onClick={this.firstPage}>First</span>
                    <span className="pagination-arrow"><FontAwesome name="angle-double-left" onClick={() => this.bulkPageChange("back")} /></span>
                    <span className="pagination-arrow"><FontAwesome name="angle-left" onClick={this.previousPage} /></span>
                        {
                            this.renderPages()
                        }
                    <span className="pagination-arrow"><FontAwesome name="angle-right" onClick={this.nextPage} /></span>
                    <span className="pagination-arrow"><FontAwesome name="angle-double-right" onClick={() => this.bulkPageChange("forward")} /></span>
                    <span onClick={this.lastPage}>Last</span>
                    <form className="custom-page" onSubmit={this.customPage}>
                        <span>Page </span>
                        <input type="number" value={this.state.customPage} name="custom-page" placeholder={this.props.currentPage} onChange={this.handleInputChange} min="1" max={this.props.pagination.totalPages}></input>
                        <span>/ {this.props.pagination.totalPages}</span>
                    </form>
                </div>
            </div>
        )
    }
}

export default Pagination;