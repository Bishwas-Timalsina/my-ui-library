import { forwardRef, useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { Check, Minus } from "lucide-react";

import type { CheckboxProps } from "./Checkbox.types";
import { CheckboxVariant } from "./Checkbox.variant";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
      indeterminate = false,
      fullWidth = false,
      className,
      onChange,
      id,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const controlled = checked !== undefined;

    const [internalChecked, setInternalChecked] = useState(
      defaultChecked ?? false,
    );

    const isChecked = controlled ? checked : internalChecked;

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) {
        setInternalChecked(e.target.checked);
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
            ref={(node) => {
              inputRef.current = node;

              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={id}
            type="checkbox"
            className="sr-only"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={handleChange}
            {...props}
          />

          <span
            className={clsx(
              CheckboxVariant({
                variant,
                size,
              }),

              isChecked &&
                variant === "primary" &&
                "bg-primary-base border-primary-base text-white",

              isChecked &&
                variant === "secondary" &&
                "bg-primary-light border-primary-base text-primary-base",

              isChecked &&
                variant === "success" &&
                "bg-success-base border-success-base text-white",

              isChecked &&
                variant === "warning" &&
                "bg-warning-base border-warning-base text-white",

              isChecked &&
                variant === "error" &&
                "bg-error-base border-error-base text-white",

              className,
            )}
          >
            {indeterminate ? (
              <Minus
                className={clsx({
                  "w-3 h-3": size === "sm",
                  "w-4 h-4": size === "md",
                  "w-5 h-5": size === "lg",
                })}
              />
            ) : (
              <Check
                className={clsx(
                  "transition-all duration-150",
                  isChecked ? "opacity-100 scale-100" : "opacity-0 scale-50",

                  {
                    "w-3 h-3": size === "sm",
                    "w-4 h-4": size === "md",
                    "w-5 h-5": size === "lg",
                  },
                )}
              />
            )}
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
