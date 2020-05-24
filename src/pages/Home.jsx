/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import useImageSearch from "../hooks/useImageSearch";
import GridImage from "../components/GridImage";
import Header from "../components/Header";

const Home = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ isLanding, setIsLanding ] = useState(true); 
    const { search = "" } = useLocation();
    const searchTerm = RegExp("/?search=(.*)", "gi").exec(search);
    const observer = useRef();
    const {
        error,
        hasMore,
        images,
        isLoading,
        total
    } = useImageSearch(searchTerm !== null ? searchTerm[1] : "random", currentPage);
    const triggerInfiniteScrollRef = useCallback(node => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(([ imageElement ]) => {
            if(imageElement.isIntersecting && hasMore) setCurrentPage(currentPage + 1);
        });

        if(node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    useEffect(() => {
        if(search !== "") setIsLanding(false);
    }, [search]);

    return (
        <div id="Home">
            <Header />
            {(!isLanding && images.length > 0) && <div className="results-found">
                {`${total} Results Found For`}
                <span className="text-pink">{searchTerm[1].toUpperCase()}</span>
            </div>}
            {isLanding && <div className="results-found">
                Welcome To FrogSplash. Find the web's best photos and photographers.
            </div>}
            <div className="image-grid">
                {images.map((image, index) => {
                    if(index === images.length - 1){
                        return(
                            <GridImage
                                key={index}
                                image={image}
                                infiniteScrollRef={triggerInfiniteScrollRef}
                            />
                        );
                    } else {
                        return (
                            <GridImage
                                key={index}
                                image={image}
                            />
                        );
                    }
                })}
            </div>
            {isLoading && <div>LOADING</div>}
            {error && <div>ERROR</div>}
        </div>
    );
};

export default Home;