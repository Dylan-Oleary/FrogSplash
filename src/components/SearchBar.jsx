import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import useScreenSize from "../hooks/useScreenSize";

const SearchBar = () => {
    const location = useLocation();
    const [ searchTerm, setSearchTerm ] = useState("");
    const isMobile = useScreenSize(567);

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
                <label htmlFor="search">
                    {isMobile
                        ? <FontAwesomeIcon icon={faSearch} />
                        : "show me"
                    }
                </label>
                <input
                    id="search"
                    name="search"
                    type="text" 
                    value={searchTerm}
                    onChange={onChange}
                    spellCheck="false" 
                    placeholder={"enter search"}
                />
            </form>
        </div>
    );
};

export default SearchBar;