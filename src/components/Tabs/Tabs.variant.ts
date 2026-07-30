import { cva } from "class-variance-authority";

export const TabsListVariant = cva(
    [
        "inline-flex",
        "gap-2",
        "p-1",
        "transition-all",
    ],
    {
        variants: {
            orientation: {
                horizontal: "flex-row",
                vertical: "flex-col w-fit",
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
        },

        defaultVariants: {
            orientation: "horizontal",
            fullWidth: false,
        },
    },
);

export const TabTriggerVariant = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-2",
        "font-medium",
        "transition-all",
        "cursor-pointer",
        "select-none",
        "disabled:opacity-50",
        "disabled:pointer-events-none",
        "whitespace-nowrap",
    ],
    {
        variants: {
            variant: {
                solid: "",
                soft: "",
                outline: "",
                underline: "",
            },

            size: {
                sm: "px-3 py-1.5 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-5 py-3 text-lg",
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

            fullWidth: {
                true: "flex-1",
                false: "",
            },
        },

        compoundVariants: [
            // SOLID
            {
                variant: "solid",
                active: true,
                class:
                    "bg-primary-base text-white",
            },
            {
                variant: "solid",
                active: false,
                class:
                    "bg-transparent text-text-body hover:bg-primary-light",
            },

            // SOFT
            {
                variant: "soft",
                active: true,
                class:
                    "bg-primary-light text-primary-base",
            },
            {
                variant: "soft",
                active: false,
                class:
                    "text-text-body hover:bg-bg-hover",
            },

            // OUTLINE
            {
                variant: "outline",
                active: true,
                class:
                    "border border-primary-base text-primary-base bg-bg-base",
            },
            {
                variant: "outline",
                active: false,
                class:
                    "border border-transparent text-text-body hover:border-border-default",
            },

            // UNDERLINE
            {
                variant: "underline",
                active: true,
                class:
                    "border-b-2 border-primary-base text-primary-base rounded-none",
            },
            {
                variant: "underline",
                active: false,
                class:
                    "border-b-2 border-transparent text-text-body hover:border-border-default rounded-none",
            },
        ],

        defaultVariants: {
            variant: "solid",
            size: "md",
            rounded: "md",
            active: false,
            fullWidth: false,
        },
    },
);

export const TabContentVariant = cva(
    [
        "mt-4",
        "outline-none",
    ],
);