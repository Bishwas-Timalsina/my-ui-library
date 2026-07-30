import { forwardRef } from "react";
import clsx from "clsx";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import Text from "../Text";

import { AlertVariant } from "./Alert.variant";
import type { AlertProps } from "./Alert.types";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      title,
      description,
      variant = "info",
      appearance = "soft",
      icon,
      closable = false,
      onClose,
      action,
      rounded = "md",
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    const defaultIcons = {
      info: <Info size={22} />,
      success: <CheckCircle2 size={22} />,
      warning: <TriangleAlert size={22} />,
      error: <AlertCircle size={22} />,
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(
          AlertVariant({
            variant,
            appearance,
            rounded,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {icon ?? defaultIcons[variant]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-1">
          {title && (
            <Text
              content={title}
              weight="semibold"
              variant={appearance === "solid" ? "reverse" : "heading"}
            />
          )}

          {description && (
            <Text
              content={description}
              size="sm"
              variant={appearance === "solid" ? "reverse" : "body"}
            />
          )}

          {action && <div className="pt-2">{action}</div>}
        </div>

        {/* Close */}
        {closable && (
          <button
            type="button"
            aria-label="Close Alert"
            onClick={onClose}
            className={clsx(
              "rounded-md p-1 transition-colors",
              appearance === "solid"
                ? "hover:bg-white/20"
                : "hover:bg-black/10",
            )}
          >
            <X size={18} />
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = "Alert";
