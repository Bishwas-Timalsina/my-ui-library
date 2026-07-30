import { forwardRef } from "react";
import clsx from "clsx";

import { TextAreaVariant } from "./TextArea.variant";
import type { TextAreaProps } from "./TextArea.types";
import { Text } from "../Text/Text";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helperText,
      error,

      variant = "default",
      state = "default",
      size = "md",
      rounded = "md",
      resize = "vertical",
      fullWidth = true,

      className,

      startAdornment,
      endAdornment,

      rows = 4,

      required,

      ...props
    },
    ref,
  ) => {
    const currentState = error ? "error" : state;

    return (
      <div className={clsx("space-y-2", fullWidth && "w-full")}>
        {label && (
          <div className="flex items-center gap-1">
            <Text content={label} variant="body" weight="medium" />

            {required && <span className="text-error-base">*</span>}
          </div>
        )}

        <div className="relative">
          {startAdornment && (
            <div className="absolute left-3 top-3">{startAdornment}</div>
          )}

          <textarea
            ref={ref}
            rows={rows}
            className={TextAreaVariant({
              variant,
              state: currentState,
              size,
              rounded,
              resize,
              fullWidth,
              className: clsx(
                startAdornment && "pl-10",
                endAdornment && "pr-10",
                className,
              ),
            })}
            {...props}
          />

          {endAdornment && (
            <div className="absolute right-3 top-3">{endAdornment}</div>
          )}
        </div>

        {error ? (
          <Text variant="error" size="xs" content={error} />
        ) : (
          helperText && <Text variant="body" size="xs" content={helperText} />
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
