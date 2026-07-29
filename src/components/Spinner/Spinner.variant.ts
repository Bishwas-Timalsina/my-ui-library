import { cva } from "class-variance-authority";


export const SpinnerVariant = cva(
    [
        "inline-flex",
        "items-center",
        "justify-center",
        "animate-spin",
    ],
    {
        variants: {

            size: {
                xs: "h-3 w-3 border-2",
                sm: "h-4 w-4 border-2",
                md: "h-6 w-6 border-2",
                lg: "h-8 w-8 border-4",
                xl: "h-12 w-12 border-4",
            },


            variant: {

                primary:
                    "border-primary-base border-t-transparent",

                secondary:
                    "border-text-secondary border-t-transparent",

                success:
                    "border-success-base border-t-transparent",

                warning:
                    "border-warning-base border-t-transparent",

                error:
                    "border-error-base border-t-transparent",

                info:
                    "border-info-base border-t-transparent",
            },


            type: {

                border:
                    "rounded-full border-solid",

                dots:
                    "rounded-full",
            },
        },


        defaultVariants: {

            size: "md",

            variant: "primary",

            type: "border",

        },
    }
);