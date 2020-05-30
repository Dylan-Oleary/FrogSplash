/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { isMobile, isTablet } from "react-device-detect";

import useImageSearch from "../hooks/useImageSearch";
import GridImage from "../components/GridImage";
import Header from "../components/Header";
import TopScrollButton from "../components/TopScrollButton";
import Loading from "../components/Loading";

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
    } = useImageSearch(searchTerm !== null ? decodeURI(searchTerm[1]) : "random", currentPage);
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
                <span className="text-pink">{decodeURI(searchTerm[1].toUpperCase())}</span>
            </div>}
            {isLanding && <div className="results-found">
                Welcome To FrogSplash. Explore the web's best photos.
                <br/>
                {(isMobile || isTablet) && "Tap a photo to meet the person who took the shot!"}
            </div>}
            <div className="image-grid">
                {images.map((image, index) => {
                    if(index === images.length - 10){
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
            {isLoading && <Loading />}
            {error && <div className="alert">Oh no! Something went wrong when trying to fetch your images</div>}
            {(!hasMore && !isLoading) && <div className="alert">
                {images.length > 0
                    ? "You've reached the end! Try searching for something else"
                    : <div>No results found for <span className="text-pink">{searchTerm[1].toUpperCase()}</span>. Try searching for something else!</div>
                }
            </div>}
            <TopScrollButton />
        </div>
    );
};

export default Home;