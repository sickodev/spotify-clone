import React from "react";
import { twMerge } from "tailwind-merge";

type BoxProps = {
    children: React.ReactNode;
    className?: string;
};

const Box = ({ children, className }: BoxProps) => {
    return (
        <div className={twMerge(`bg-neutral-900 h-fit w-full`, className)}>
            {children}
        </div>
    );
};

export default Box;
