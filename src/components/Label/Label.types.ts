import type { LabelHTMLAttributes } from "react";

export type LabelVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "muted";

export type LabelSize =
    | "xs"
    | "sm"
    | "md"
    | "lg";

export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    optional?: boolean;

    variant?: LabelVariant;
    size?: LabelSize;
}