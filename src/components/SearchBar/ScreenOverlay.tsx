import { forwardRef } from "react";
import { useIsMounted } from "../../utils/hooks/useIsMounted";
import { combineClassnames } from "../../utils/styles/combineClassnames";

import "./overlayFade.css";
import { SearchBarElementIds } from "./SearchBarElementIds";

type ScreenOverlayProps = {
    visible: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

const ScreenOverlay = forwardRef<HTMLDivElement, ScreenOverlayProps>(
    ({ visible, onClick }, ref) => {
        const isMounted = useIsMounted();

        return (
            <div
                ref={ref}
                id={SearchBarElementIds.ScreenOverlay}
                data-testid={SearchBarElementIds.ScreenOverlay}
                onClick={onClick}
                aria-hidden
                className={combineClassnames(
                    "fixed top-0 left-0 w-screen h-screen bg-gray-900",
                    {
                        "-z-10 opacity-0": !isMounted,
                        "animation-overlay-fade-in": isMounted && visible,
                        "animation-overlay-fade-out": isMounted && !visible,
                    }
                )}
            ></div>
        );
    }
);

export default ScreenOverlay;
