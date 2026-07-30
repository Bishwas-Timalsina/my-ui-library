import { HTMLAttributes, ReactNode } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "error" | "info";
export type BadgeAppearance = "solid" | "outline" | "soft";
export type BadgeSize = "xs" | "sm" | "md" | "lg";
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    label?: string;
    variant?: BadgeVariant;
    appearance?: BadgeAppearance;
    size?: BadgeSize;
    rounded?: "sm" | "md" | "full";
    icon?: ReactNode;
    dot?: boolean;
    removable?: boolean;
    onRemove?: () => void;
}
