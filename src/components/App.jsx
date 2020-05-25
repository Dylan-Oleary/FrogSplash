import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

if (typeof window !== "undefined") {
    require("smooth-scroll")("a[href*='#']", {
        speed: 500,
        speedAsDuration: true,
        easing: "linear"
    });
}

const App = () => {
    return (
        <div id="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;