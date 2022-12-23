import React, { SVGProps } from "react";

type ArrowRghtIconProps = SVGProps<SVGSVGElement> & {};

const ArrowRightIcon: React.FC<ArrowRghtIconProps> = (props) => {
    return (
        <svg {...props}>
            <path
                fill="currentColor"
                d="M10.586 6.586a2 2 0 0 0 0 2.828L12.172 11H4.928a2 2 0 0 0 0 4h7.244l-1.586 1.586a2 2 0 1 0 2.828 2.828L19.828 13l-6.414-6.414a2 2 0 0 0-2.828 0z"
            />
        </svg>
    );
};

export default ArrowRightIcon;
