import type {
    HTMLAttributes,
    ReactNode,
} from "react";


export type ModalSize =
    | "sm"
    | "md"
    | "lg"
    | "xl";


export type ModalVariant =
    | "default"
    | "danger"
    | "success";


export interface ModalProps
    extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    onClose?: () => void;
    title?: string;
    children?: ReactNode;
    footer?: ReactNode;
    size?: ModalSize;
    variant?: ModalVariant;
    closeOnOverlayClick?: boolean;
}