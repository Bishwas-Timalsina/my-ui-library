import { InputHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type RadioVariant = "primary" | "secondary" | "success" | "warning" | "error";
export type RadioSize = "sm" | "md" | "lg";
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: string;
    variant?: RadioVariant;
    size?: RadioSize;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
}
