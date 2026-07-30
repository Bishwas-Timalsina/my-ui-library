import { cva } from "class-variance-authority";

export const AlertVariant = cva(
    [
        "flex",
        "items-start",
        "p-2",
        "gap-4",
        "border",
        "transition-all",
        "w-fit",
    ],
    {
        variants: {
            variant: {
                info: "",
                success: "",
                warning: "",
                error: "",
            },

            appearance: {
                solid: "",
                soft: "",
                outline: "",
            },

            rounded: {
                sm: "rounded",
                md: "rounded-lg",
                lg: "rounded-xl",
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
        },

        compoundVariants: [
            // INFO
            {
                variant: "info",
                appearance: "solid",
                class:
                    "bg-info-base border-info-base text-white",
            },
            {
                variant: "info",
                appearance: "soft",
                class:
                    "bg-info-bg border-info-base text-info-base",
            },
            {
                variant: "info",
                appearance: "outline",
                class:
                    "bg-transparent border-info-base text-info-base",
            },

            // SUCCESS
            {
                variant: "success",
                appearance: "solid",
                class:
                    "bg-success-base border-success-base text-white",
            },
            {
                variant: "success",
                appearance: "soft",
                class:
                    "bg-success-bg border-success-base text-success-base",
            },
            {
                variant: "success",
                appearance: "outline",
                class:
                    "bg-transparent border-success-base text-success-base",
            },

            // WARNING
            {
                variant: "warning",
                appearance: "solid",
                class:
                    "bg-warning-base border-warning-base text-white",
            },
            {
                variant: "warning",
                appearance: "soft",
                class:
                    "bg-warning-bg border-warning-base text-warning-base",
            },
            {
                variant: "warning",
                appearance: "outline",
                class:
                    "bg-transparent border-warning-base text-warning-base",
            },

            // ERROR
            {
                variant: "error",
                appearance: "solid",
                class:
                    "bg-error-base border-error-base text-white",
            },
            {
                variant: "error",
                appearance: "soft",
                class:
                    "bg-error-bg border-error-base text-error-base",
            },
            {
                variant: "error",
                appearance: "outline",
                class:
                    "bg-transparent border-error-base text-error-base",
            },
        ],

        defaultVariants: {
            variant: "info",
            appearance: "soft",
            rounded: "md",
            fullWidth: false,
        },
    }
);