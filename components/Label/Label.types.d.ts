import { LabelHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type LabelVariant = "default" | "primary" | "success" | "warning" | "error" | "muted";
export type LabelSize = "xs" | "sm" | "md" | "lg";
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
    optional?: boolean;
    variant?: LabelVariant;
    size?: LabelSize;
}
