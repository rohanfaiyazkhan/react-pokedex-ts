import { forwardRef } from "react";
import { useIsMounted } from "../../utils/hooks/useIsMounted";
import { combineClassnames } from "../../utils/styles/combineClassnames";

import "./overlayFade.css";

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
                onClick={onClick}
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
