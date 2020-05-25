import React from "react";

import SearchBar from "../components/SearchBar";

const Header = () => {
    return (
        <div id="Header" className="header">
            <a href="/">
                <h1>
                    Frog
                    <span>Splash</span>
                </h1>
            </a>
            <SearchBar />
        </div>
    );
};

export default Header;