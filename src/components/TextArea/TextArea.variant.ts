import { cva } from "class-variance-authority";

export const TextAreaVariant = cva(
    [
        "transition-all",
        "outline-none",
        "border",
        "placeholder:text-text-disabled",
        "focus:ring-2",
    ],
    {
        variants: {
            variant: {
                default:
                    "bg-bg-base border-border-default",

                outline:
                    "bg-transparent border-border-default",

                filled:
                    "bg-bg-hover border-transparent",

                ghost:
                    "border-transparent bg-transparent",
            },

            state: {
                default: "",

                error:
                    "border-border-error focus:border-border-error",

                success:
                    "border-success-base focus:border-success-base",

                warning:
                    "border-warning-base focus:border-warning-base",
            },

            size: {
                sm: "p-2 text-sm",
                md: "p-3 text-base",
                lg: "p-4 text-lg",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-md",
                lg: "rounded-lg",
                full: "rounded-2xl",
            },

            resize: {
                none: "resize-none",
                vertical: "resize-y",
                horizontal: "resize-x",
                both: "resize",
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },
        },

        defaultVariants: {
            variant: "default",
            state: "default",
            size: "md",
            rounded: "md",
            resize: "vertical",
            fullWidth: true,
        },
    }
);