import { cva } from "class-variance-authority";

export const TextVariant = cva("", {
    variants: {
        variant: {
            heading: "text-text-heading",
            subHeading: "text-text-body",
            body: "text-text-muted",
            caption: "text-text-muted",
            link: "text-text-link hover:underline cursor-pointer",
            error: "text-text-error",
            success: "text-success-base",
            warning: "text-warning-base",
            info: "text-info-base",
            reverse: "text-text-primary",
            disabled: "text-text-disabled",
        },

        size: {
            "2xs": "text-[10px]",
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
            "4xl": "text-4xl",
        },

        weight: {
            thin: "font-thin",
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
            extrabold: "font-extrabold",
        },

        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },

        truncate: {
            true: "truncate",
            false: "",
        },

        uppercase: {
            true: "uppercase",
            false: "",
        },

        italic: {
            true: "italic",
            false: "",
        },

        underline: {
            true: "underline",
            false: "",
        },
    },

    defaultVariants: {
        variant: "body",
        size: "md",
        weight: "normal",
        align: "left",
        truncate: false,
        uppercase: false,
        italic: false,
        underline: false,
    },
});