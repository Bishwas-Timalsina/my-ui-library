import type { InputHTMLAttributes } from "react";

export type SwitchVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";

export type SwitchSize =
    | "sm"
    | "md"
    | "lg";

export interface SwitchProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "size"
    > {
    label?: string;
    variant?: SwitchVariant;
    size?: SwitchSize;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
}