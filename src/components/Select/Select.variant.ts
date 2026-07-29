import { cva } from "class-variance-authority";

export const SelectVariant = cva(
    [
        "relative",
        "flex",
        "items-center",
        "justify-between",
        "transition-all duration-200",
        "cursor-pointer",
        "select-none",
        "border",
        "outline-none",
        "disabled:opacity-50",
        "disabled:pointer-events-none",
    ],
    {
        variants: {
            variant: {
                default: [
                    "bg-surface-primary",
                    "border-border-primary",
                    "text-text-base",
                    "hover:border-primary-base",
                    "focus-within:border-primary-base",
                ].join(" "),

                outline: [
                    "bg-transparent",
                    "border-border-primary",
                    "text-text-primary",
                    "hover:border-primary-base",
                ].join(" "),

                filled: [
                    "bg-surface-secondary",
                    "border-transparent",
                    "text-text-primary",
                    "hover:bg-surface-tertiary",
                ].join(" "),

                ghost: [
                    "bg-transparent",
                    "border-transparent",
                    "text-text-primary",
                    "hover:bg-surface-secondary",
                ].join(" "),

                error: [
                    "bg-surface-primary",
                    "border-error-base",
                    "text-text-primary",
                    "focus-within:border-error-base",
                ].join(" "),
            },

            size: {
                xs: "h-8 px-2 text-xs",
                sm: "h-9 px-3 text-sm",
                md: "h-11 px-4 text-base",
                lg: "h-12 px-4 text-lg",
                xl: "h-14 px-5 text-xl",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-lg",
                full: "rounded-full",
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit min-w-[220px]",
            },

            disabled: {
                true: "cursor-not-allowed opacity-60",
                false: "",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
            rounded: "md",
            fullWidth: false,
            disabled: false,
        },
    }
);