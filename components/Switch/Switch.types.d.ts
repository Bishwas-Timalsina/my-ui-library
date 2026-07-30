import { InputHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type SwitchVariant = "primary" | "secondary" | "success" | "warning" | "error";
export type SwitchSize = "sm" | "md" | "lg";
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: string;
    variant?: SwitchVariant;
    size?: SwitchSize;
    helperText?: string;
    error?: string;
    fullWidth?: boolean;
}
