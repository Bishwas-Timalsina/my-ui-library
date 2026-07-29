import { forwardRef } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

import { BadgeVariant } from "./Badge.variant";
import type { BadgeProps } from "./Badge.types";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      label,
      variant = "primary",
      appearance = "solid",
      size = "md",
      rounded = "full",
      icon,
      dot = false,
      removable = false,
      onRemove,
      className,
      ...props
    },
    ref,
  ) => {
    const dotColor = {
      primary: "bg-primary-base",
      secondary: "bg-text-muted",
      success: "bg-success-base",
      warning: "bg-warning-base",
      error: "bg-error-base",
      info: "bg-info-base",
    };

    const dotSize = {
      xs: "w-1.5 h-1.5",
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
    };

    const removeButtonSize = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-5 h-5",
    };

    const removeIconSize = {
      xs: "w-2.5 h-2.5",
      sm: "w-3 h-3",
      md: "w-3.5 h-3.5",
      lg: "w-4 h-4",
    };

    return (
      <span
        ref={ref}
        className={clsx(
          BadgeVariant({
            variant,
            appearance,
            size,
            rounded,
          }),
          className,
        )}
        {...props}
      >
        {dot && (
          <span
            className={clsx(
              "rounded-full shrink-0",
              dotColor[variant],
              dotSize[size],
            )}
          />
        )}

        {icon && (
          <span className="flex items-center justify-center" aria-hidden="true">
            {icon}
          </span>
        )}

        {label && <span>{label}</span>}

        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className={clsx(
              "rounded-full flex items-center justify-center transition-colors hover:bg-black/10",
              removeButtonSize[size],
            )}
            aria-label="Remove badge"
          >
            <X className={removeIconSize[size]} />
          </button>
        )}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
