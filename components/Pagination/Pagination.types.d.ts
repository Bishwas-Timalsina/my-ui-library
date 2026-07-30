import { HTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.8/node_modules/react';
export type PaginationVariant = "solid" | "outline" | "ghost";
export type PaginationSize = "sm" | "md" | "lg";
export type PaginationRounded = "none" | "sm" | "md" | "full";
export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
    variant?: PaginationVariant;
    size?: PaginationSize;
    rounded?: PaginationRounded;
    fullWidth?: boolean;
    disabled?: boolean;
}
