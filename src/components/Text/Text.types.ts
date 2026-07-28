import type {
    HTMLAttributes,
    ReactNode,
    ElementType,
} from "react";
import type { VariantProps } from "class-variance-authority";

import { TextVariant } from "./Text.variant";

export interface TextProps
    extends Omit<HTMLAttributes<HTMLElement>, "content">,
    VariantProps<typeof TextVariant> {
    children?: ReactNode;
    content?: ReactNode;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    as?: ElementType;
}