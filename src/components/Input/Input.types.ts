export type InputState =
    | "default"
    | "error"
    | "success"
    | "warning";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
    variant?: "default" | "outline" | "filled" | "ghost";
    state?: InputState;
    inputSize?: "sm" | "md" | "lg";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}