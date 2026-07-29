import { cva } from "class-variance-authority";


export const ModalVariant = cva(
    [
        "relative",
        "bg-white",
        "rounded-xl",
        "shadow-xl",
        "overflow-hidden",
        "transition-all",
    ],
    {
        variants: {
            size: {
                sm:
                    "w-full max-w-sm",
                md:
                    "w-full max-w-md",
                lg:
                    "w-full max-w-lg",
                xl:
                    "w-full max-w-xl",
            },
            variant: {
                default:
                    "border border-border-default",
                danger:
                    "border border-error-base",
                success:
                    "border border-success-base",
            },
        },
        defaultVariants: {
            size: "md",
            variant: "default",

        },
    }
);