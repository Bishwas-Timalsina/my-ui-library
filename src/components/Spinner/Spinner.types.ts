import type { HTMLAttributes } from "react";


export type SpinnerSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";


export type SpinnerVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";


export type SpinnerType =
    | "border"
    | "dots";


export interface SpinnerProps
    extends HTMLAttributes<HTMLDivElement> {

    size?: SpinnerSize;

    variant?: SpinnerVariant;

    type?: SpinnerType;

    label?: string;
}