import { forwardRef } from "react";

import type { SpinnerProps } from "./Spinner.types";

import { SpinnerVariant } from "./Spinner.variant";

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      size = "md",
      variant = "primary",
      type = "border",
      label = "Loading",
      className,
      ...props
    },
    ref,
  ) => {
    if (type === "dots") {
      return (
        <div
          ref={ref}
          role="status"
          aria-label={label}
          className="flex gap-1"
          {...props}
        >
          <span
            className={`
                            rounded-full
                            animate-bounce
                            bg-current
                            ${className ?? ""}
                        `}
          />

          <span
            className="
                            rounded-full
                            animate-bounce
                            bg-current
                            delay-150
                        "
          />

          <span className="rounded-full animate-bounce bg-current delay-300" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={SpinnerVariant({
          size,
          variant,
          type,
          className,
        })}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";
