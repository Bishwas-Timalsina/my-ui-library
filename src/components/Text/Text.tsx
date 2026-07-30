import clsx from "clsx";
import { forwardRef } from "react";

import type { TextProps } from "./Text.types";
import { TextVariant } from "./Text.variant";

export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      content,

      variant = "body",
      size = "md",
      weight = "normal",
      align = "left",

      truncate = false,
      uppercase = false,
      italic = false,
      underline = false,

      icon,
      iconPosition = "left",

      className,
      onClick,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          TextVariant({
            variant,
            size,
            weight,
            align,
            uppercase,
            italic,
            underline,
          }),
          "min-w-0",
          className,
        )}
        onClick={onClick}
      >
        <div className="flex items-center gap-2 min-w-0">
          {icon && iconPosition === "left" && (
            <span className="flex shrink-0 items-center">{icon}</span>
          )}

          <span className={clsx("block min-w-0", truncate && "truncate")}>
            {children ?? content}
          </span>

          {icon && iconPosition === "right" && (
            <span className="flex shrink-0 items-center">{icon}</span>
          )}
        </div>
      </div>
    );
  },
);

Text.displayName = "Text";
