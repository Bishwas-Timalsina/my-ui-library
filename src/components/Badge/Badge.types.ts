import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";

export type BadgeAppearance =
    | "solid"
    | "outline"
    | "soft";

export type BadgeSize =
    | "xs"
    | "sm"
    | "md"
    | "lg";

export interface BadgeProps
    extends HTMLAttributes<HTMLSpanElement> {
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