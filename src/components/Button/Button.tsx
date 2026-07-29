import { forwardRef } from "react";
import clsx from "clsx";

import { ButtonVariant } from "./Button.variant";
import type { ButtonProps } from "./Button.types";

import Text from "../Text";
import { Spinner } from "../Spinner";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      icon,
      onClick,
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      rounded = "md",
      invert = false,
      disabled = false,
      isLoading = false,
      textWeight = "normal",
      textSize = "md",
      type = "button",

      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        onClick={isDisabled ? undefined : onClick}
        className={ButtonVariant({
          variant,
          size,
          fullWidth,
          rounded,
          loading: isLoading,
          iconOnly: !label && !!icon,
          className: clsx(className),
        })}
        {...props}
      >
        {isLoading ? (
          <div className="flex flex-row justify-center items-center gap-2">
            <Spinner variant="secondary" />
            {label && (
              <Text
                content="Loading..."
                size={textSize}
                weight={textWeight}
                variant={variant === "primary" ? "reverse" : "heading"}
              />
            )}
          </div>
        ) : (
          <>
            {invert && icon}

            {label && (
              <Text
                content={label}
                size={textSize}
                weight={textWeight}
                variant={variant === "primary" ? "reverse" : "heading"}
              />
            )}

            {!invert && icon}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
