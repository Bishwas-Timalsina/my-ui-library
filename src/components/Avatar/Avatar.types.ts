import type {
    HTMLAttributes,
    ImgHTMLAttributes,
    ReactNode,
} from "react";

export type AvatarSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";

export type AvatarRounded =
    | "none"
    | "sm"
    | "md"
    | "full";

export type AvatarStatus =
    | "online"
    | "offline"
    | "away"
    | "busy";

export type AvatarBackground =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";

export interface AvatarProps
    extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    name?: string;
    icon?: ReactNode;
    size?: AvatarSize;
    rounded?: AvatarRounded;
    background?: AvatarBackground;
    status?: AvatarStatus;
    border?: boolean;
    imageProps?: ImgHTMLAttributes<HTMLImageElement>;
}