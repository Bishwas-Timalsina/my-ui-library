
export type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "disabled"
    | "loading"
    | "error";
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "xs";


export interface ButtonProps {
    label: string
    onClick?: () => void;
    icon?: React.ReactNode
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "ghost" | "disabled" | "loading" | "error";
    isLoading?: boolean;
    invert?: boolean;
    textSize?: "xs" | "sm" | "md" | "lg" | "xl";
    textWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
    disabled?: boolean;
}