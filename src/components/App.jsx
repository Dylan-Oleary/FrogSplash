import React, { Fragment }from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            pagination: {
                display: false,
                totalItems: null,
                totalPages: null,
                currentPage: 1
            },
            currentSearch: "",
            pageStatus: "landing",
            showModal: false,
            browserWidth: 0
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        const browserWidth = window.window.innerWidth;

        this.setState({ browserWidth });
    }

    onSearchSubmit = async (searchTerm, page) => {
        unsplash.get("/search/photos", {
            params: {
                query: searchTerm,
                per_page: 50,
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
            <div id="App" ref={this.browserWidthRef}>
                <div className={`main-container ${this.state.pageStatus}`}>
                    {
                        this.state.pageStatus === "landing" ? (
                            <Fragment>
                                <ReactCSSTransitionGroup 
                                    transitionName="fade-in"
                                    transitionAppear={true} 
                                    transitionAppearTimeout={800}       
                                    transitionEnter={false}
                                    transitionLeave={false}
                                >
                                    <div className="landing-page-wrapper">
                                        <h1 className={`${this.state.pageStatus}-page-title polaroid-marker`}>FrogSplash</h1>
                                        <p className="landing-page-text">
                                            Think about what you want to see.
                                        </p>
                                        <p className="landing-page-text">
                                            Jump from the top rope into the search bar.
                                        </p>
                                        <p className="landing-page-text">
                                            Make a splash.
                                        </p>
                                        <SearchBar
                                            className="landing-page-search"
                                            onSearchSubmit={this.onSearchSubmit}
                                            placeholder="Search"
                                            icon={false}
                                        />
                                    </div>
                                </ReactCSSTransitionGroup>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className="nav-page-wrapper">
                                    <h1 className={`${this.state.pageStatus}-page-title polaroid-marker`} onClick={() => this.setState({ pageStatus: "landing"})}>FrogSplash</h1>
                                    <SearchBar 
                                        className="nav-page-search" 
                                        currentSearch={this.state.currentSearch} 
                                        onSearchSubmit={this.onSearchSubmit}
                                        icon={true}
                                    />
                                </div>
                                <ImageList
                                    currentSearch={this.state.currentSearch}
                                    images={this.state.images}
                                    onPageChange={this.onSearchSubmit}
                                    pagination={this.state.pagination}
                                    browserWidth={this.state.browserWidth} 
                                />
                            </Fragment>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App;