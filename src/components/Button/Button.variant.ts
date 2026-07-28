// import { cva } from "class-variance-authority";

// export const ButtonVariant = cva(
//     [
//         "inline-flex items-center justify-center gap-2",
//         "rounded-lg",
//         "font-semibold",
//         "cursor-pointer",
//         "transition-all duration-200",
//         // "focus:outline-none",
//         // "focus:ring-2",
//         // "focus:ring-offset-2",
//         // "disabled:cursor-disabled",
//         "disabled:opacity-50",
//         "select-none",
//         "whitespace-nowrap",
//     ],
//     {
//         variants: {
//             variant: {
//                 primary:
//                     "bg-btn-primary border border-primary-border text-btn-primary-text hover:bg-btn-primary-hover hover:text-btn-primary-hover-text",

//                 secondary:
//                     "bg-btn-secondary border border-secondary-border text-btn-secondary-text hover:bg-btn-secondary-hover hover:text-btn-secondary-hover-text",

//                 error:
//                     "bg-btn-error border border-error-border text-btn-error-text hover:bg-btn-error-hover hover:text-btn-error-hover-text",

//                 ghost:
//                     "bg-btn-ghost text-btn-ghost-text hover:bg-btn-ghost-hover hover:text-btn-ghost-hover-text",

//                 outline:
//                     "bg-transparent border border-primary-border text-btn-primary hover:bg-btn-primary hover:text-white",

//                 link:
//                     "bg-transparent text-btn-primary underline-offset-4 hover:underline",

//                 success:
//                     "bg-green-600 text-white hover:bg-green-700",

//                 warning:
//                     "bg-yellow-500 text-black hover:bg-yellow-600",
//             },

//             size: {
//                 xs: "h-7 px-2 text-xs",
//                 sm: "h-9 px-3 text-sm",
//                 md: "h-11 px-4 text-base",
//                 lg: "h-12 px-6 text-lg",
//                 xl: "h-14 px-8 text-xl",
//             },

//             fullWidth: {
//                 true: "w-full",
//                 false: "w-fit",
//             },

//             rounded: {
//                 none: "rounded-none",
//                 sm: "rounded",
//                 md: "rounded-lg",
//                 full: "rounded-full",
//             },

//             loading: {
//                 true: "cursor-wait",
//                 false: "",
//             },

//             iconOnly: {
//                 true: "aspect-square px-0",
//                 false: "",
//             },
//         },

//         defaultVariants: {
//             variant: "primary",
//             size: "md",
//             fullWidth: false,
//             rounded: "md",
//             loading: false,
//             iconOnly: false,
//         },
//     }
// );

import { cva } from "class-variance-authority";

export const ButtonVariant = cva(
    [
        "inline-flex items-center justify-center",
        // "text-text-primary",
        "transition-all duration-200",
        "font-semibold",
        "cursor-pointer",
        // "disabled:pointer-events-none",
        "disabled:opacity-50",
        "select-none",
        "whitespace-nowrap",
    ],
    {
        variants: {
            variant: {
                primary: [
                    "bg-btn-primary",
                    "text-[#fff]",
                    "border",
                    "border-btn-primary-border",
                    "hover:bg-btn-primary-hover",
                    "hover:text-btn-primary-hover-text",
                ].join(" "),

                secondary: [
                    "bg-btn-secondary",
                    "text-btn-secondary-text",
                    "border",
                    "border-btn-secondary-border",
                    "hover:bg-btn-secondary-hover",
                    "hover:text-btn-secondary-hover-text",
                ].join(" "),

                ghost: [
                    "bg-transparent",
                    "text-primary-base",
                    "border",
                    "border-transparent",
                    "hover:bg-primary-extraLight",
                ].join(" "),

                outline: [
                    "bg-transparent",
                    "text-primary-base",
                    "border",
                    "border-primary-base",
                    "hover:bg-primary-light",
                ].join(" "),

                link: [
                    "bg-transparent",
                    "text-text-link",
                    "border-none",
                    "shadow-none",
                    "hover:underline",
                ].join(" "),

                success: [
                    "bg-success-base",
                    "text-text-primary",
                    "border",
                    "border-success-base",
                    "hover:bg-success-bg",
                    "hover:text-success-base",
                ].join(" "),

                warning: [
                    "bg-warning-base",
                    "text-text-primary",
                    "border",
                    "border-warning-base",
                    "hover:bg-warning-bg",
                    "hover:text-warning-base",
                ].join(" "),

                error: [
                    "bg-error-base",
                    "text-text-primary",
                    "border",
                    "border-error-base",
                    "hover:bg-error-bg",
                    "hover:text-error-base",
                ].join(" "),
            },

            size: {
                xs: "h-7 px-2 text-xs",
                sm: "h-9 px-3 text-sm",
                md: "h-11 px-4 text-base",
                lg: "h-12 px-6 text-lg",
                xl: "h-14 px-8 text-xl",
            },

            rounded: {
                none: "rounded-none",
                sm: "rounded",
                md: "rounded-lg",
                full: "rounded-full",
            },

            fullWidth: {
                true: "w-full",
                false: "w-fit",
            },

            loading: {
                true: "cursor-wait",
                false: "",
            },

            iconOnly: {
                true: "aspect-square p-0",
                false: "",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
            rounded: "md",
            fullWidth: false,
            loading: false,
            iconOnly: false,
        },
    }
);