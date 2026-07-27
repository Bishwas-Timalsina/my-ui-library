import clsx from "clsx"
import { cva } from "class-variance-authority"
export const ButtonVariant = cva(
    "flex flex-row items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: clsx("bg-btn-primary",
                    "border border-primary-border",
                    "text-btn-primary-text",
                    "hover:bg-btn-primary-hover hover:text-btn-primary-hover-text"),
                secondary: clsx("bg-btn-secondary",
                    "border border-secondary-border",
                    "text-btn-secondary-text",
                    "hover:bg-btn-secondary-hover hover:text-btn-secondary-hover-text"),
                error: clsx("bg-btn-error",
                    "border border-error-border",
                    "text-btn-error-text",
                    "hover:bg-btn-error-hover hover:text-btn-error-hover-text"),
                ghost: clsx("bg-btn-ghost",
                    "text-btn-ghost-text",
                    "hover:bg-btn-ghost-hover hover:text-btn-ghost-hover-text"),
                disabled: clsx("bg-btn-disabled",
                    "border border-disabled-border",
                    "text-btn-disabled-text"),
                loading: clsx("bg-btn-loading",
                    "border border-loading-border",
                    "text-btn-loading-text")
            }
        },
        defaultVariants: {
            variant: "primary"
        }
    }
)