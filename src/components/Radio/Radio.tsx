import { forwardRef, useState } from "react";
import clsx from "clsx";

import type { RadioProps } from "./Radio.types";
import { RadioVariant } from "./Radio.variant";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      helperText,
      error,
      variant = "primary",
      size = "md",
      checked,
      defaultChecked,
      disabled,
      fullWidth = false,
      className,
      onChange,
      id,
      ...props
    },
    ref,
  ) => {
    const controlled = checked !== undefined;

    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false,
    );

    const isChecked = controlled ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) {
        setInternalChecked(true);
      }

      onChange?.(e);
    };

    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
        <label
          htmlFor={id}
          className={clsx(
            "inline-flex items-center gap-3 cursor-pointer",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <input
            ref={ref}
            id={id}
            type="radio"
            className="sr-only"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />

          <span
            className={clsx(
              RadioVariant({
                variant,
                size,
              }),

              isChecked && variant === "primary" && "border-primary-base",

              isChecked && variant === "secondary" && "border-primary-base",

              isChecked && variant === "success" && "border-success-base",

              isChecked && variant === "warning" && "border-warning-base",

              isChecked && variant === "error" && "border-error-base",

              className,
            )}
          >
            <span
              className={clsx(
                "rounded-full transition-all duration-150",

                isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0",

                {
                  "w-2 h-2": size === "sm",
                  "w-2.5 h-2.5": size === "md",
                  "w-3 h-3": size === "lg",
                },

                variant === "primary" && "bg-primary-base",

                variant === "secondary" && "bg-primary-base",

                variant === "success" && "bg-success-base",

                variant === "warning" && "bg-warning-base",

                variant === "error" && "bg-error-base",
              )}
            />
          </span>

          {label && <span className="text-text-body">{label}</span>}
        </label>

        {(helperText || error) && (
          <span
            className={clsx(
              "ml-8 text-xs",

              error ? "text-error-base" : "text-text-muted",
            )}
          >
            {error ?? helperText}
          </span>
        )}
      </div>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
