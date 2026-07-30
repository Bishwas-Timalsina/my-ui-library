import { HTMLAttributes, ReactNode } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type CardVariant = "default" | "outline" | "ghost" | "primary" | "success" | "warning" | "error";
export type CardPadding = "none" | "sm" | "md" | "lg";
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    rounded?: "none" | "sm" | "md" | "full";
    shadow?: "none" | "sm" | "md" | "lg";
    fullWidth?: boolean;
}
