import { cva } from "class-variance-authority";

export const PaginationContainerVariant = cva(
    [
        "flex",
        "items-center",
        "gap-2",
    ],
    {
        variants: {
            fullWidth: {
                true: "w-full justify-center",
                false: "w-fit",
            },
        },

        defaultVariants: {
            fullWidth: false,
        },
    },
);

export const PaginationButtonVariant = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "font-medium",
        "transition-all",
        "cursor-pointer",
        "select-none",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        "border",
    ],
    {
        variants: {
            variant: {
                solid: "",
                outline: "",
                ghost: "",
            },

            size: {
                sm: "h-8 min-w-8 px-3 text-sm",
                md: "h-10 min-w-10 px-4 text-base",
                lg: "h-12 min-w-12 px-5 text-lg",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-lg",
                full: "rounded-full",
            },

            active: {
                true: "",
                false: "",
            },
        },

        compoundVariants: [
            {
                variant: "solid",
                active: true,
                class:
                    "bg-primary-base text-white border-primary-base",
            },
            {
                variant: "solid",
                active: false,
                class:
                    "bg-bg-base text-text-body border-border-default hover:bg-primary-light",
            },
            {
                variant: "outline",
                active: true,
                class:
                    "border-primary-base text-primary-base bg-bg-base",
            },
            {
                variant: "outline",
                active: false,
                class:
                    "border-border-default bg-bg-base hover:border-primary-base hover:text-primary-base",
            },
            {
                variant: "ghost",
                active: true,
                class:
                    "bg-primary-light text-primary-base border-transparent",
            },
            {
                variant: "ghost",
                active: false,
                class:
                    "bg-transparent border-transparent hover:bg-primary-extraLight",
            },
        ],

        defaultVariants: {
            variant: "solid",
            size: "md",
            rounded: "md",
            active: false,
        },
    },
);