import { cva } from 'class-variance-authority'
import { TextSize, TextWeight } from './Text.types';
export const TextVariant = cva("leading-normal", {
    variants: {
        variant: {
            heading: "text-text-heading",
            subHeading: "text-text-body",
            body: "text-text-muted",
            link: "text-text-link",
            error: "text-text-error",
            reverse: "text-text-primary", // invert the text color to white
            disabled: "text-text-disabled",
        },
        size: TextSize,
        weight: TextWeight,
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },
        truncate: {
            true: "truncate",
        },
        uppercase: {
            true: "uppercase",
        }, italic: {
            true: "italic",
        }, underline: {
            true: "underline",
        },
    }, defaultVariants: {
        size: "md",
        weight: "normal",
        align: "left",
        variant: "body",
    }
})