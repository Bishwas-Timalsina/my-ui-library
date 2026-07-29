import { forwardRef } from "react";
import clsx from "clsx";

import type { LabelProps } from "./Label.types";
import { LabelVariant } from "./label.variant";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      required = false,
      optional = false,
      ...props
    },
    ref,
  ) => {
    return (
      <label
        ref={ref}
        className={LabelVariant({
          variant,
          size,
          className: clsx(className),
        })}
        {...props}
      >
        {children}

        {required && <span className="text-error-base">*</span>}

        {optional && (
          <span className="text-text-secondary text-xs">(Optional)</span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label";
