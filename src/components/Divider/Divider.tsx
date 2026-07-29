import { forwardRef } from "react";

import type { DividerProps } from "./Divider.types";

import { DividerVariant } from "./Divider.variant";

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "solid",
      size = "md",
      color = "default",
      label,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        className={DividerVariant({
          orientation,
          variant,
          size,
          color,
          className,
        })}
        {...props}
      >
        {label && (
          <span
            className="
                                px-3
                                text-sm
                                text-text-secondary
                                whitespace-nowrap
                            "
          >
            {label}
          </span>
        )}
      </div>
    );
  },
);

Divider.displayName = "Divider";
