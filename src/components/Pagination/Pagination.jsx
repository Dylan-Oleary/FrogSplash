import React from "react";
import "./Pagination.css"

class Pagination extends React.Component {
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
                    <span className="active" onClick={this.handlePageNumberClick} key={`page-${page}`}>{page}</span>
                )
            }else{
                return (
                    <span onClick={this.handlePageNumberClick} key={`page-${page}`}>{page}</span>
                )
            }
        })
    }

    render(){
        return (
            <div id="Pagination">
                <span onClick={this.firstPage}>First</span>
                <span onClick={this.previousPage}>Prev</span>
                    {
                        this.renderPages()
                    }
                <span onClick={this.nextPage}>Next</span>
                <span onClick={this.lastPage}>Last</span>
            </div>
        )
    }
}

export default Pagination;