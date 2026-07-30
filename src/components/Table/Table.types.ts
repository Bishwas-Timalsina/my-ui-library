import type { HTMLAttributes, ReactNode } from "react";

export type TableVariant =
    | "default"
    | "bordered"
    | "minimal";

export type TableSize =
    | "sm"
    | "md"
    | "lg";

export type TableAlign =
    | "left"
    | "center"
    | "right";

export interface TableColumn<T> {
    key: keyof T | string;
    title: ReactNode;
    width?: string | number;
    align?: TableAlign;
    render?: (
        value: unknown,
        record: T,
        index: number,
    ) => ReactNode;
}

export interface TableProps<T>
    extends HTMLAttributes<HTMLDivElement> {
    columns: TableColumn<T>[];
    data: T[];
    rowKey?: keyof T | ((record: T) => string);
    loading?: boolean;
    emptyText?: ReactNode;
    variant?: TableVariant;
    size?: TableSize;
    hoverable?: boolean;
    striped?: boolean;
    stickyHeader?: boolean;
    responsive?: boolean;
    onRowClick?: (
        record: T,
        index: number,
    ) => void;
}