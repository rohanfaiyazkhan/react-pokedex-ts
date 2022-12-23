import { useLayoutEffect, useState } from "react";
import { BreakpointNames, Breakpoints } from "./Breakpoints";

function isLessThanBreakpoint(width: number, breakpoint: BreakpointNames) {
    const breakpointWidth = Breakpoints[breakpoint];

    return width < breakpointWidth;
}

export function useIsMobile(breakpoint: BreakpointNames) {
    const currentScreenWidth = window.innerWidth;
    const initiallyIsMobile = isLessThanBreakpoint(
        currentScreenWidth,
        breakpoint
    );

    const [isMobile, setIsMobile] = useState(initiallyIsMobile);

    useLayoutEffect(() => {
        function listener(event: UIEvent) {
            const currentScreenWidth = window.innerWidth;
            const newResult = isLessThanBreakpoint(
                currentScreenWidth,
                breakpoint
            );

            if (isMobile !== newResult) {
                setIsMobile(newResult);
            }
        }

        window.addEventListener("resize", listener);

        return function unsubscribe() {
            window.removeEventListener("resize", listener);
        };
    }, [breakpoint, isMobile]);

    return isMobile;
}
