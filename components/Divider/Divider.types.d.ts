import { HTMLAttributes, ReactNode } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed" | "dotted";
export type DividerSize = "sm" | "md" | "lg";
export type DividerColor = "default" | "primary" | "secondary" | "success" | "warning" | "error" | "info";
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: DividerOrientation;
    variant?: DividerVariant;
    size?: DividerSize;
    color?: DividerColor;
    label?: ReactNode;
}
