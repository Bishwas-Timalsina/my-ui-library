import { HTMLAttributes, ReactNode } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type TabsVariant = "solid" | "soft" | "outline" | "underline";
export type TabsSize = "sm" | "md" | "lg";
export type TabsRounded = "none" | "sm" | "md" | "full";
export type TabsOrientation = "horizontal" | "vertical";
export interface TabItem {
    value: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    content: ReactNode;
}
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    items: TabItem[];
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    variant?: TabsVariant;
    size?: TabsSize;
    rounded?: TabsRounded;
    orientation?: TabsOrientation;
    fullWidth?: boolean;
}
