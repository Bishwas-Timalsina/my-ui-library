import { forwardRef, useId } from "react";
import clsx from "clsx";

import type { InputProps } from "./Input.types";
import { InputVariant } from "./Input.variant";

import Text from "../Text";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      variant = "default",
      state = "default",
      inputSize = "md",
      rounded = "md",
      fullWidth = true,
      rightIcon,
      leftIcon,
      className,
      disabled,
      required,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div
        className={clsx("flex flex-col gap-2", fullWidth ? "w-full" : "w-fit")}
      >
        {label && (
          <label htmlFor={inputId} className="flex items-center gap-1">
            <Text variant="body" size="sm" weight="medium">
              {label}
            </Text>

            {required && <Text variant="error">*</Text>}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3 flex items-center text-text-muted">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={state === "error"}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={InputVariant({
              variant,
              state,
              size: inputSize,
              rounded,
              fullWidth,
              className: clsx(
                leftIcon && "pl-10",
                rightIcon && "pr-10",
                className,
              ),
            })}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3 flex items-center text-text-muted">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <Text id={`${inputId}-error`} variant="error" size="xs">
            {error}
          </Text>
        ) : helperText ? (
          <Text id={`${inputId}-helper`} variant="disabled" size="xs">
            {helperText}
          </Text>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
