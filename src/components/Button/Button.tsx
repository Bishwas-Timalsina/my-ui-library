import { forwardRef } from "react";
import { ButtonVariant } from "./Button.variant";
import { clsx } from "clsx";

import type { ButtonProps } from "./Button.types";
import Text from "../Text";
// import { Loading } from "./Button.stories";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      label,
      onClick,
      icon,
      className,
      type = "button",
      variant = "primary",
      isLoading = false,
      textWeight = "normal",
      invert = false,
      textSize = "md",
    } = props;
    const isDisabled = variant === "disabled" || isLoading;

    return (
      <button
        ref={ref}
        onClick={!isDisabled && !isLoading ? onClick : undefined}
        type={type}
        disabled={isDisabled}
        className={ButtonVariant({
          variant: isLoading ? "disabled" : variant,
          className: clsx(
            isDisabled ? "justify-between" : "justify-center",
            className,
            isDisabled ? "cursor-not-allowed" : "cursor-pointer",
          ),
        })}
      >
        {invert && icon}
        {label && (
          <Text
            size={textSize}
            weight={textWeight}
            variant={
              variant === "secondary"
                ? "link"
                : variant === "disabled"
                  ? "disabled"
                  : variant === "error"
                    ? "error"
                    : variant === "ghost"
                      ? "heading"
                      : isLoading
                        ? "disabled"
                        : "reverse"
            }
            content={isLoading ? "Loading..." : label}
          />
        )}
        {(!invert && icon && icon) || (isLoading && <p>Loading...</p>)}
      </button>
    );
  },
);
Button.displayName = "Button";
// export default Button;
