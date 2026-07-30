export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "link" | "success" | "warning" | "error";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    invert?: boolean;
    fullWidth?: boolean;
    rounded?: "none" | "sm" | "md" | "full";
    isLoading?: boolean;
    textSize?: ButtonSize;
    textWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
}
