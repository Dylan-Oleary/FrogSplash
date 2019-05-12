import React from "react";
import FontAwesome from "react-fontawesome";
// import "./SearchBar.scss";

class SearchBar extends React.Component {
    state = {
        searchTerm: this.props.currentSearch ? this.props.currentSearch : ""
    }
 
    handleInputChange = event =>{
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();

        const defaultPage = 1;

        this.props.onSearchSubmit(this.state.searchTerm, defaultPage);
    }

    render(){
        return (
            <div id="SearchBar" className={this.props.className}>
                <form onSubmit={this.onFormSubmit} autoComplete="off">
                    <FontAwesome name="camera-retro"/>
                    <div className="input-wrapper">
                        <input className="search-input polaroid-marker" ref={this.inputRef} type="text" value={this.state.searchTerm} name="search" onChange={this.handleInputChange} autoFocus spellCheck="false" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;