// import { cva } from "class-variance-authority";

// export const CheckboxVariant = cva(
//     [
//         "appearance-none",
//         "shrink-0",
//         "border",
//         "transition-all",
//         "duration-200",
//         "cursor-pointer",
//         "flex",
//         "items-center",
//         "justify-center",
//         "disabled:opacity-50",
//         "disabled:cursor-not-allowed",

//     ],
//     {
//         variants: {
//             variant: {
//                 primary: [
//                     "border-primary-base",
//                     "checked:bg-primary-base",
//                     "checked:border-primary-base",
//                 ].join(" "),

//                 secondary: [
//                     "border-secondary-base",
//                     "checked:bg-secondary-base",
//                     "checked:border-secondary-base",
//                 ].join(" "),

//                 success: [
//                     "border-success-base",
//                     "checked:bg-success-base",
//                     "checked:border-success-base",
//                 ].join(" "),

//                 warning: [
//                     "border-warning-base",
//                     "checked:bg-warning-base",
//                     "checked:border-warning-base",
//                 ].join(" "),

//                 error: [
//                     "border-error-base",
//                     "checked:bg-error-base",
//                     "checked:border-error-base",
//                 ].join(" "),
//             },

//             size: {
//                 sm: "h-4 w-4 rounded",
//                 md: "h-5 w-5 rounded-md",
//                 lg: "h-6 w-6 rounded-md",
//             },
//         },

//         defaultVariants: {
//             variant: "primary",
//             size: "md",
//         },
//     }
// );

import { cva } from "class-variance-authority";

export const CheckboxVariant = cva(
    [
        "flex",
        "items-center",
        "justify-center",
        "border",
        "transition-all",
        "duration-200",
        "rounded",
        "shrink-0",
        "select-none",
    ],
    {
        variants: {
            variant: {
                primary: "border-primary-base",

                secondary: "border-border-default",

                success: "border-success-base",

                warning: "border-warning-base",

                error: "border-error-base",
            },

            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
                lg: "w-6 h-6",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);