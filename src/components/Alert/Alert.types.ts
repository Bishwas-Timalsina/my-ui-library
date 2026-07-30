import type {
    HTMLAttributes,
    ReactNode,
} from "react";

export type AlertVariant =
    | "info"
    | "success"
    | "warning"
    | "error";

export type AlertAppearance =
    | "solid"
    | "soft"
    | "outline";

export interface AlertProps
    extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    variant?: AlertVariant;
    appearance?: AlertAppearance;
    icon?: ReactNode;
    closable?: boolean;
    onClose?: () => void;
    action?: ReactNode;
    fullWidth?: boolean;
    rounded?: "sm" | "md" | "lg";
}