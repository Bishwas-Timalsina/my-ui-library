import type { HTMLAttributes, ReactNode } from "react";

export type DividerOrientation =
    | "horizontal"
    | "vertical";

export type DividerVariant =
    | "solid"
    | "dashed"
    | "dotted";

export type DividerSize =
    | "sm"
    | "md"
    | "lg";


export type DividerColor =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";


export interface DividerProps
    extends HTMLAttributes<HTMLDivElement> {
    orientation?: DividerOrientation;
    variant?: DividerVariant;
    size?: DividerSize;
    color?: DividerColor;
    label?: ReactNode;
}