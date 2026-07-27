// src/components/Text/Text.tsx
import React, { forwardRef } from "react";
import clsx from "clsx";
import { TextVariant } from "./Text.variant";
import type { TextProps } from "./Text.types";

const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      content,
      variant = "heading",
      size = "md",
      weight = "normal",
      align = "left",
      truncate = false,
      uppercase = false,
      italic = false,
      underline = false,
      icon,
      iconPosition = "left",
      className = "",
      onClick,
    },
    ref,
  ) => {
    const textNode = (
      <span className={clsx("block min-w-0", truncate && "truncate")}>
        {children ?? content}
      </span>
    );

    const iconNode = icon ? (
      <span className="items-center flex shrink-0">{icon}</span>
    ) : null;

    const nodes =
      icon && iconPosition === "right"
        ? [textNode, iconNode]
        : [iconNode, textNode];

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
          {nodes?.map((node, index) =>
            node ? <React.Fragment key={index}>{node}</React.Fragment> : null,
          )}
        </div>
      </div>
    );
  },
);

Text.displayName = "Text";
export default Text;
