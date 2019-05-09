import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
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
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.searchTerm} name="search" placeholder="What are you looking for ?" onChange={this.handleInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;