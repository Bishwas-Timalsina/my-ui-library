import type { ReactNode } from "react";



export const TextSize = {
    "2xs": "text-[10px]",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
} as const
export const TextWeight = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
}

export type TextSizeType = keyof typeof TextSize;
export type TextWeightType = keyof typeof TextWeight;

export interface TextProps {
    children?: ReactNode;
    content?: ReactNode;
    variant?: "heading" | "subHeading" | "body" | "link" | "disabled" | "error" | "reverse" | "disabled";
    size?: TextSizeType;
    weight?: TextWeightType;
    align?: "left" | "center" | "right" | "justify";
    truncate?: boolean;
    uppercase?: boolean;
    italic?: boolean;
    underline?: boolean;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    className?: string;
    onClick?: () => void;
}