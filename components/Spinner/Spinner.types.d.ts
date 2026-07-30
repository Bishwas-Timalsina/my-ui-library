import { HTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerVariant = "primary" | "secondary" | "success" | "warning" | "error" | "info";
export type SpinnerType = "border" | "dots";
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
    type?: SpinnerType;
    label?: string;
}
