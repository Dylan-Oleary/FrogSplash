import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList";
import "./App.css";

class App extends React.Component {
    state = {
        images: [],
        pagination: {
            display: false,
            totalItems: null,
            totalPages: null,
            currentPage: 1
        },
        currentSearch: "",
        showModal: false
    }

    onSearchSubmit = (searchTerm, page) => {
        unsplash.get("/search/photos", {
            params: {
                query: searchTerm,
                per_page: 12,
                page: page
            }
        }).then(response => {
            this.setState({
                images: response.data.results,
                currentSearch: searchTerm,
                pagination: {
                    display: true,
                    totalItems: response.data.total,
                    totalPages: response.data.total_pages,
                    currentPage: page
                }
            });
        })
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} pagination={this.state.pagination} onPageChange={this.onSearchSubmit} currentSearch={this.state.currentSearch}/>
            </div>
        )
    }
}

export default App;