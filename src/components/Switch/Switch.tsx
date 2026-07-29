import { forwardRef, useState } from "react";
import clsx from "clsx";

import type { SwitchProps } from "./Switch.types";
import { SwitchTrackVariant, SwitchThumbVariant } from "./Switch.variant";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
        setInternalChecked(e.target.checked);
      }

      onChange?.(e);
    };

    return (
      <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
        <label
          htmlFor={id}
          className={clsx(
            "inline-flex items-center gap-3 cursor-pointer select-none",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <input
            ref={ref}
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
              SwitchTrackVariant({
                variant,
                size,
                checked: isChecked,
              }),
              className,
            )}
          >
            <span
              className={SwitchThumbVariant({
                size,
                checked: isChecked,
              })}
            />
          </span>

          {label && <span className="text-text-body">{label}</span>}
        </label>

        {(helperText || error) && (
          <span
            className={clsx(
              "ml-14 text-xs",
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

Switch.displayName = "Switch";

export default Switch;
