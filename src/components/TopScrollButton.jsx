import React from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import useScrollBreakpoint from "../hooks/useScrollBreakpoint";

const TopScrollButton = () => {
    const showTopButton = useScrollBreakpoint(800);
    const { right } = useSpring({
        right: showTopButton ? "15px" : "-150px",
        config: {
            mass: 1,
            tension: 400,
            friction: 30
        }
    });
    
    return (
        <animated.a
            href="#Header"
            id="TopScrollButton"
            style={{
                right
            }}
        >
            <button
                type="button"
                aria-label="Scroll To Top of Page"
                onClick={() => window.scrollTo(0, 0)}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </animated.a>
    );
};

export default TopScrollButton;