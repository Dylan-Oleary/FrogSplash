import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
    const location = useLocation();
    const [ searchTerm, setSearchTerm ] = useState("");

    const onChange = event => {
        const { value } = event.target;

        setSearchTerm(value);
    };

    const onSubmit = event => {
        event.preventDefault();

        if(searchTerm.trim() !== "") window.location.assign(`${location.pathname}?search=${searchTerm}`);
    };

    return (
        <div id="SearchBar">
            <form
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <label htmlFor="search">show me</label>
                <input 
                    name="search"
                    type="text" 
                    value={searchTerm}
                    onChange={onChange}
                    spellCheck="false" 
                    placeholder={""}
                />
            </form>
        </div>
    );
};

export default SearchBar;