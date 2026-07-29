import { cva } from "class-variance-authority";

export const SwitchTrackVariant = cva(
    [
        "relative",
        "inline-flex",
        "items-center",
        "rounded-full",
        "transition-all",
        "duration-200",
        "cursor-pointer",
        "shrink-0",
    ],
    {
        variants: {
            variant: {
                primary: "",
                secondary: "",
                success: "",
                warning: "",
                error: "",
            },

            size: {
                sm: "w-9 h-5",
                md: "w-11 h-6",
                lg: "w-14 h-7",
            },

            checked: {
                true: "",
                false: "",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
            checked: false,
        },
    },
);

export const SwitchThumbVariant = cva(
    [
        "absolute",
        "rounded-full",
        "bg-white",
        "shadow",
        "transition-all",
        "duration-200",
    ],
    {
        variants: {
            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
                lg: "w-6 h-6",
            },

            checked: {
                false: "translate-x-0.5",
                true: "",
            },
        },

        compoundVariants: [
            {
                size: "sm",
                checked: true,
                class: "translate-x-4",
            },
            {
                size: "md",
                checked: true,
                class: "translate-x-5",
            },
            {
                size: "lg",
                checked: true,
                class: "translate-x-7",
            },
        ],

        defaultVariants: {
            size: "md",
            checked: false,
        },
    },
);