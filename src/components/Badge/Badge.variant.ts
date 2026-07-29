import { cva } from "class-variance-authority";

export const BadgeVariant = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-1.5",
        "font-medium",
        "transition-colors",
        "select-none",
        "whitespace-nowrap",
        "border",
    ],
    {
        variants: {
            variant: {
                primary: "",
                secondary: "",
                success: "",
                warning: "",
                error: "",
                info: "",
            },

            appearance: {
                solid: "",
                outline: "",
                soft: "",
            },

            size: {
                xs: "px-2 py-0.5 text-[10px]",
                sm: "px-2.5 py-1 text-xs",
                md: "px-3 py-1.5 text-sm",
                lg: "px-4 py-2 text-base",
            },

            rounded: {
                sm: "rounded",
                md: "rounded-md",
                full: "rounded-full",
            },
        },

        compoundVariants: [
            // PRIMARY
            {
                variant: "primary",
                appearance: "solid",
                class:
                    "bg-primary-base text-white border-primary-base",
            },
            {
                variant: "primary",
                appearance: "outline",
                class:
                    "bg-transparent text-primary-base border-primary-base",
            },
            {
                variant: "primary",
                appearance: "soft",
                class:
                    "bg-primary-extraLight text-primary-base border-primary-border",
            },

            // SECONDARY
            {
                variant: "secondary",
                appearance: "solid",
                class:
                    "bg-bg-hover text-text-heading border-border-default",
            },
            {
                variant: "secondary",
                appearance: "outline",
                class:
                    "bg-transparent text-text-heading border-border-default",
            },
            {
                variant: "secondary",
                appearance: "soft",
                class:
                    "bg-bg-hover text-text-heading border-border-default",
            },

            // SUCCESS
            {
                variant: "success",
                appearance: "solid",
                class:
                    "bg-success-base text-white border-success-base",
            },
            {
                variant: "success",
                appearance: "outline",
                class:
                    "bg-transparent text-success-base border-success-base",
            },
            {
                variant: "success",
                appearance: "soft",
                class:
                    "bg-success-bg text-success-base border-success-base",
            },

            // WARNING
            {
                variant: "warning",
                appearance: "solid",
                class:
                    "bg-warning-base text-white border-warning-base",
            },
            {
                variant: "warning",
                appearance: "outline",
                class:
                    "bg-transparent text-warning-base border-warning-base",
            },
            {
                variant: "warning",
                appearance: "soft",
                class:
                    "bg-warning-bg text-warning-base border-warning-base",
            },

            // ERROR
            {
                variant: "error",
                appearance: "solid",
                class:
                    "bg-error-base text-white border-error-base",
            },
            {
                variant: "error",
                appearance: "outline",
                class:
                    "bg-transparent text-error-base border-error-base",
            },
            {
                variant: "error",
                appearance: "soft",
                class:
                    "bg-error-bg text-error-base border-error-base",
            },

            // INFO
            {
                variant: "info",
                appearance: "solid",
                class:
                    "bg-info-base text-white border-info-base",
            },
            {
                variant: "info",
                appearance: "outline",
                class:
                    "bg-transparent text-info-base border-info-base",
            },
            {
                variant: "info",
                appearance: "soft",
                class:
                    "bg-info-bg text-info-base border-info-base",
            },
        ],

        defaultVariants: {
            variant: "primary",
            appearance: "solid",
            size: "md",
            rounded: "full",
        },
    },
);