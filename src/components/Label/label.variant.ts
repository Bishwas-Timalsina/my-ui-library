import { cva } from "class-variance-authority";

export const LabelVariant = cva(
    [
        "inline-flex",
        "items-center",
        "gap-1",
        "font-medium",
        "select-none",
    ],
    {
        variants: {
            variant: {
                default: "text-text-heading",

                primary: "text-primary-base",

                success: "text-success-base",

                warning: "text-warning-base",

                error: "text-error-base",

                muted: "text-text-secondary",
            },

            size: {
                xs: "text-xs",
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);