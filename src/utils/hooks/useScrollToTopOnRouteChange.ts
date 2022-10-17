import { useLocation } from "react-router";
import { useEffect } from "react";

export function useScrollToTopOnRouteChange() {
    const location = useLocation().pathname;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location]);
}
