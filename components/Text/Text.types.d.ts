import { HTMLAttributes, ReactNode, ElementType } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { TextVariant } from './Text.variant';
export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "content">, VariantProps<typeof TextVariant> {
    children?: ReactNode;
    content?: ReactNode;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    as?: ElementType;
}
