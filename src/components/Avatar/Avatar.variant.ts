import { cva } from "class-variance-authority";

export const AvatarVariant = cva(
    [
        "relative",
        "inline-flex",
        "items-center",
        "justify-center",
        "overflow-hidden",
        "font-semibold",
        "select-none",
        "shrink-0",
    ],
    {
        variants: {
            size: {
                xs: "w-8 h-8 text-xs",
                sm: "w-10 h-10 text-sm",
                md: "w-12 h-12 text-base",
                lg: "w-16 h-16 text-lg",
                xl: "w-20 h-20 text-xl",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-lg",
                full: "rounded-full",
            },

            background: {
                primary: "bg-primary-base text-white",
                secondary: "bg-bg-hover text-text-heading",
                success: "bg-success-base text-white",
                warning: "bg-warning-base text-white",
                error: "bg-error-base text-white",
                info: "bg-info-base text-white",
            },

            border: {
                true: "border-2 border-white shadow",
                false: "",
            },
        },

        defaultVariants: {
            size: "md",
            rounded: "full",
            background: "primary",
            border: false,
        },
    }
);