import { cva } from "class-variance-authority";

export const RadioVariant = cva(
    [
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "transition-all",
        "duration-200",
        "shrink-0",
        "select-none",
    ],
    {
        variants: {
            variant: {
                primary: "border-primary-base",

                secondary: "border-border-default",

                success: "border-success-base",

                warning: "border-warning-base",

                error: "border-error-base",
            },

            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
                lg: "w-6 h-6",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);