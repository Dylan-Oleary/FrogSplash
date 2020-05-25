/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useScrollBreakpoint = breakpoint => {
    const scrollPosition = useRef(window.scrollY);
    const [ breakpointPassed, setBreakpointPassed ] = useState(window.scrollY >= breakpoint);

    useEffect(() => {
        window.addEventListener("scroll", () => setScrollPosition(window.scrollY));

        return () => window.removeEventListener("scroll", () => setScrollPosition(window.scrollY));
    }, []);

    const setScrollPosition = newScroll => {
        const previousPosition = scrollPosition.current;

        scrollPosition.current = newScroll;

        if(scrollPosition.current >= breakpoint && previousPosition < breakpoint){
            setBreakpointPassed(true);
        } else if(scrollPosition.current < breakpoint && previousPosition >= breakpoint){
            setBreakpointPassed(false)
        }
    };

    return breakpointPassed;
};

export default useScrollBreakpoint;