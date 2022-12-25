import { useLayoutEffect, useState } from "react";
import { BreakpointNames, Breakpoints } from "./Breakpoints";

function isLessThanBreakpoint(width: number, breakpoint: BreakpointNames) {
    const breakpointWidth = Breakpoints[breakpoint];

    return width < breakpointWidth;
}

/**
 * Hook that returns whether window is below a certain breakpoint, e.g. "SM" will return true if window is below 512px
 * @param breakpoint
 * @returns
 */
export function useIsMobile(mobileBreakpoint: BreakpointNames) {
    const currentScreenWidth = window.innerWidth;
    const initiallyIsMobile = isLessThanBreakpoint(
        currentScreenWidth,
        mobileBreakpoint
    );

    const [isMobile, setIsMobile] = useState(initiallyIsMobile);

    useLayoutEffect(() => {
        function listener(event: UIEvent) {
            const currentScreenWidth = window.innerWidth;
            const newResult = isLessThanBreakpoint(
                currentScreenWidth,
                mobileBreakpoint
            );

            if (isMobile !== newResult) {
                setIsMobile(newResult);
            }
        }

        window.addEventListener("resize", listener);

        return function unsubscribe() {
            window.removeEventListener("resize", listener);
        };
    }, [mobileBreakpoint, isMobile]);

    return isMobile;
}
