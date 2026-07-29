import { cva } from "class-variance-authority";


export const DividerVariant = cva(
    [
        "flex",
        "items-center",
        "border-0",
    ],
    {
        variants: {

            orientation: {
                horizontal:
                    "w-full border-t",

                vertical:
                    "h-full border-l",
            },


            variant: {
                solid: "",

                dashed:
                    "border-dashed",

                dotted:
                    "border-dotted",
            },


            size: {
                sm:
                    "my-2",

                md:
                    "my-4",

                lg:
                    "my-8",
            },


            color: {

                default:
                    "border-border-default",

                primary:
                    "border-primary-base",

                secondary:
                    "border-text-secondary",

                success:
                    "border-success-base",

                warning:
                    "border-warning-base",

                error:
                    "border-error-base",

                info:
                    "border-info-base",
            },
        },


        compoundVariants: [
            {
                orientation: "vertical",
                size: "sm",
                class: "mx-2 my-0 h-full",
            },

            {
                orientation: "vertical",
                size: "md",
                class: "mx-4 my-0 h-full",
            },

            {
                orientation: "vertical",
                size: "lg",
                class: "mx-8 my-0 h-full",
            },
        ],


        defaultVariants: {
            orientation: "horizontal",
            variant: "solid",
            size: "md",
            color: "default",
        },
    }
);