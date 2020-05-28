/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import unsplash from "../api/unsplash";

const useImageSearch = (query, pageNumber) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ images, setImages ] = useState([]);
    const [ total, setTotal ] = useState(0);
    const [ hasMore, setHasMore ] = useState(false);

    useEffect(() => {
        if(query.trim() !== ""){
            setIsLoading(true);
            setError(false);

            unsplash.get("/search/photos", {
                params: {
                    query: query,
                    auto: "format",
                    per_page: 24,
                    page: pageNumber
                }
            }).then(response => {
                const updatedImageList = [ ...images ];
                
                response.data.results.forEach(image => updatedImageList.push(image));

                setImages(updatedImageList);
                setHasMore(response.data.results.length > 0);
                setIsLoading(false);

                if(total === 0) setTotal(response.data.total);
            }).catch(error => {
                setError(true);
            });
        } else {
            setIsLoading(false);
        }
    }, [pageNumber]);

    return {
        isLoading,
        error,
        images,
        hasMore,
        total
    };
};

export default useImageSearch;