import { HTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
export type SelectVariant = "default" | "outline" | "filled" | "ghost" | "error";
export type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    helperText?: string;
    error?: string;
    disabled?: boolean;
    searchable?: boolean;
    clearable?: boolean;
    fullWidth?: boolean;
    rounded?: "none" | "sm" | "md" | "full";
    variant?: SelectVariant;
    size?: SelectSize;
}
