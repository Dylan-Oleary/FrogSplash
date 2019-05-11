import React, { Fragment }from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar/SearchBar";
import ImageList from "./ImageList/ImageList";
import "./App.scss";

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
        pageStatus: "landing",
        showModal: false
    }

    onSearchSubmit = async (searchTerm, page) => {
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
                    currentPage: page,
                },
                pageStatus: "nav"
            });
        })
    }

    render(){
        return (
            <div id="App">
                <div className="main-container">
                    {
                        this.state.pageStatus === "landing" ? (
                            <Fragment>
                                <ReactCSSTransitionGroup 
                                    transitionName="fade-in"
                                    transitionAppear={true} 
                                    transitionAppearTimeout={3000}       
                                    transitionEnter={false}
                                    transitionLeave={false}
                                >
                                    <h1 className={`${this.state.pageStatus} polaroid-marker`}>What do you want to see?</h1>
                                    <SearchBar onSearchSubmit={this.onSearchSubmit} className="landing-page"/>
                                </ReactCSSTransitionGroup>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <h1 onClick={() => this.setState({ pageStatus: "landing"})} className={`${this.state.pageStatus} polaroid-marker`}>What do you want to see?</h1>
                                <SearchBar currentSearch={this.state.currentSearch} onSearchSubmit={this.onSearchSubmit} className="nav"/>
                                <ImageList images={this.state.images} pagination={this.state.pagination} onPageChange={this.onSearchSubmit} currentSearch={this.state.currentSearch}/>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App;