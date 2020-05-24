/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const GridImage = ({
    image,
    infiniteScrollRef
}) => {
    const {
        description,
        urls
    } = image;

    return (
        <div className="grid-item">
            {    infiniteScrollRef
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
        </div>
    );
};

export default GridImage;