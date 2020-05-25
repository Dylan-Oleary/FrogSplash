import React from "react";
import { ReactComponent as Splash } from "../static/splashy.svg";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <div id="Loading">
            <ReactLoading
                type="bars"
                color="#FFF"
                className="loading-bars"
            />
            <Splash className="splash" />
        </div>
    );
};

export default Loading;