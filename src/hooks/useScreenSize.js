/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useScreenSize = breakpoint => {
    const [ isMobile, setIsMobile ] = useState(window.innerWidth < breakpoint ? true : false);

    useEffect(() => {
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

        return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, []);

    const setScreenWidth = newWidth => {
        if(newWidth >= breakpoint){
            setIsMobile(false);
        } else if(newWidth < breakpoint){
            setIsMobile(true);
        }
    };

    return isMobile;
};

export default useScreenSize;