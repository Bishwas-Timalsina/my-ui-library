import { TextareaHTMLAttributes, ReactNode } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type TextAreaVariant = "default" | "outline" | "filled" | "ghost";
export type TextAreaState = "default" | "error" | "success" | "warning";
export type TextAreaSize = "sm" | "md" | "lg";
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
