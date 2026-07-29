import type { InputHTMLAttributes } from "react";

export type CheckboxVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";

export type CheckboxSize =
    | "sm"
    | "md"
    | "lg";

export interface CheckboxProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "size"
    > {
    label?: string;
    variant?: CheckboxVariant;
    size?: CheckboxSize;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
    indeterminate?: boolean;
}