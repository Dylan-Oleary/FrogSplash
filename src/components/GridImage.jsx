/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

import PhotographerCard from "../components/PhotographerCard";

const GridImage = ({
    image,
    infiniteScrollRef
}) => {
    const [ itemClassName, setItemClassName ] = useState("");
    const [ flipped, setFlipped ] = useState(false);
    const {
        description,
        urls
    } = image;
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    return (
        <div className="grid-image">
            <animated.div
                className={`image-card ${itemClassName}`}
                onMouseOver={() => setItemClassName("hover")}
                onMouseOut={() => setItemClassName("")}
                style={{
                    opacity: opacity.interpolate(o => 1 - o),
                    transform,
                    height: "100%",
                    width: "100%",
                    zIndex: flipped ? 0 : 1
                }}
            >
                {infiniteScrollRef
                    ? (
                        <img
                            ref={infiniteScrollRef}
                            src={urls.regular}
                            alt={description}
                            loading="lazy"
                        />
                    ) : (
                        <img
                            src={urls.regular}
                            alt={description}
                            loading="lazy"
                        />
                    )
                }
                <div className="image-details">
                    <button
                        type="button"
                        aria-label="View Photographer"
                        onClick={() => setFlipped(!flipped)}
                    >
                        View Photographer
                    </button>
                </div>
            </animated.div>
            <animated.div
                className="photographer-card"
                style={{
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                    height: "100%",
                    width: "100%",
                    zIndex: flipped ? 1 : 0
                }}
            >
                <PhotographerCard
                    flipCard={() => setFlipped(false)}
                    photographer={image.user}
                />
            </animated.div>
        </div>
    );
};

export default GridImage;