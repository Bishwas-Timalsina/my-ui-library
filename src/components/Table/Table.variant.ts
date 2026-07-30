import { cva } from "class-variance-authority";

export const TableContainerVariant = cva(
    [
        "w-full",
        "overflow-x-auto",
        "rounded-lg",
    ],
    {
        variants: {
            responsive: {
                true: "overflow-x-auto",
                false: "overflow-visible",
            },
        },

        defaultVariants: {
            responsive: true,
        },
    },
);

export const TableVariant = cva(
    [
        "w-full",
        "border-collapse",
        "text-left",
    ],
    {
        variants: {
            variant: {
                default:
                    "border border-border-default",

                bordered:
                    "border border-border-default",

                minimal:
                    "border-0",
            },
        },

        defaultVariants: {
            variant: "default",
        },
    },
);

export const TableHeadVariant = cva(
    [
        "bg-bg-hover",
        "text-text-heading",
        "font-semibold",
    ],
    {
        variants: {
            sticky: {
                true: "sticky top-0 z-10",
                false: "",
            },
        },

        defaultVariants: {
            sticky: false,
        },
    },
);

export const TableRowVariant = cva(
    [
        "transition-colors",
        "border-b",
        "border-border-muted",
    ],
    {
        variants: {
            hoverable: {
                true: "hover:bg-primary-extraLight cursor-pointer",
                false: "",
            },

            striped: {
                true: "even:bg-bg-light",
                false: "",
            },
        },

        defaultVariants: {
            hoverable: true,
            striped: false,
        },
    },
);

export const TableCellVariant = cva(
    [],
    {
        variants: {
            size: {
                sm: "px-3 py-2 text-sm",
                md: "px-4 py-3 text-base",
                lg: "px-5 py-4 text-lg",
            },

            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
        },

        defaultVariants: {
            size: "md",
            align: "left",
        },
    },
);