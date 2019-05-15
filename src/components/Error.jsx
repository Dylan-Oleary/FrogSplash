import React from "react";

const Error = ({searchTerm}) => {
    return (
        <div id="Error">
            <p className="error-text">
                Hey, I looked hard but I seriously couldn't find any photos of 
            </p>
            <p className="error-term">
                {searchTerm}
            </p>
            <p className="error-text">
                Maybe try searching for something else!
            </p>
        </div>
    )
}

export default Error;