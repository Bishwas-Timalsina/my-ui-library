import { forwardRef } from "react";
import clsx from "clsx";

import { CardVariant } from "./Card.variant";
import type { CardProps } from "./Card.types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "default",
      padding = "md",
      rounded = "md",
      shadow = "sm",
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={CardVariant({
          variant,
          padding,
          rounded,
          shadow,
          fullWidth,
          className: clsx(className),
        })}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
