import { cva } from "class-variance-authority";

export const CardVariant = cva(
    [
        "transition-all duration-200",
        "border",
        "overflow-hidden",
        "bg-surface-primary",
    ],
    {
        variants: {
            variant: {
                default: [
                    "border-border-primary",
                    "bg-surface-primary",
                ].join(" "),

                outline: [
                    "bg-transparent",
                    "border-border-primary",
                ].join(" "),

                ghost: [
                    "border-transparent",
                    "bg-surface-secondary",
                ].join(" "),

                primary: [
                    "border-primary-base",
                    "bg-primary-extraLight",
                ].join(" "),

                success: [
                    "border-success-base",
                    "bg-success-bg",
                ].join(" "),

                warning: [
                    "border-warning-base",
                    "bg-warning-bg",
                ].join(" "),

                error: [
                    "border-error-base",
                    "bg-error-bg",
                ].join(" "),
            },

            padding: {
                none: "p-0",
                sm: "p-3",
                md: "p-5",
                lg: "p-8",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-lg",
                full: "rounded-3xl",
            },

            shadow: {
                none: "shadow-none",
                sm: "shadow-sm",
                md: "shadow-md",
                lg: "shadow-lg",
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
        },

        defaultVariants: {
            variant: "default",
            padding: "md",
            rounded: "md",
            shadow: "sm",
            fullWidth: false,
        },
    }
);