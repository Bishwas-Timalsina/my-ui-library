import { cva } from "class-variance-authority";

export const InputVariant = cva(
    [
        "w-full",
        "transition-all duration-200",
        "border",
        "outline-none",
        "placeholder:text-text-disabled",
        "disabled:pointer-events-none",
        "disabled:opacity-60",
        "read-only:bg-bg-disabled",
        "rounded-md"

    ],
    {
        variants: {
            variant: {
                default: [
                    "bg-bg-base",
                    "border-border-default",
                    "text-text-body",
                    "hover:border-border-focus",
                ].join(" "),

                outline: [
                    "bg-transparent",
                    "border-primary-base",
                    "text-text-body",
                    "hover:border-primary-hover",
                ].join(" "),

                filled: [
                    "bg-bg-hover",
                    "border-transparent",
                    "text-text-body",
                    "hover:bg-primary-extraLight",
                ].join(" "),

                ghost: [
                    "bg-transparent",
                    "border-transparent",
                    "text-text-body",
                    "hover:bg-bg-hover",
                ].join(" "),
            },

            size: {
                sm: "h-9 px-3 text-sm",
                md: "h-11 px-4 text-base",
                lg: "h-13 px-5 text-lg",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-full",
            },

            state: {
                default: "",

                error: [
                    "border-border-error",
                    "focus:border-border-error",
                    "focus:ring-error-base/20",
                ].join(" "),

                success: [
                    "border-success-base",
                    "focus:border-success-base",
                    "focus:ring-success-base/20",
                ].join(" "),

                warning: [
                    "border-warning-base",
                    "focus:border-warning-base",
                    "focus:ring-warning-base/20",
                ].join(" "),
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "md",
            rounded: "md",
            state: "default",
            fullWidth: true,
        },
    },
);