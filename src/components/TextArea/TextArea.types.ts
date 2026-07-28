import type { TextareaHTMLAttributes, ReactNode } from "react";

export type TextAreaVariant =
    | "default"
    | "outline"
    | "filled"
    | "ghost";

export type TextAreaState =
    | "default"
    | "error"
    | "success"
    | "warning";

export type TextAreaSize =
    | "sm"
    | "md"
    | "lg";

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "prefix" | "size"> {
    label?: string;
    helperText?: string;
    error?: string;
    variant?: TextAreaVariant;
    state?: TextAreaState;
    size?: TextAreaSize;
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    fullWidth?: boolean;
    resize?: "none" | "vertical" | "horizontal" | "both";
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}