import { forwardRef, useMemo, useState } from "react";
import clsx from "clsx";
import { User } from "lucide-react";

import { AvatarVariant } from "./Avatar.variant";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      icon,
      size = "md",
      rounded = "full",
      background = "primary",
      status,
      border = false,
      className,
      imageProps,
      ...props
    },
    ref,
  ) => {
    const [imageError, setImageError] = useState(false);

    const initials = useMemo(() => {
      if (!name) return "";

      const words = name.trim().split(/\s+/);

      if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
      }

      return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }, [name]);

    const statusColor = {
      online: "bg-success-base",
      offline: "bg-text-muted",
      away: "bg-warning-base",
      busy: "bg-error-base",
    };

    const statusSize = {
      xs: "w-2 h-2",
      sm: "w-2.5 h-2.5",
      md: "w-3 h-3",
      lg: "w-4 h-4",
      xl: "w-5 h-5",
    };

    return (
      <div
        ref={ref}
        className={clsx(
          AvatarVariant({
            size,
            rounded,
            background,
            border,
          }),
          className,
        )}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt ?? name ?? "Avatar"}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            {...imageProps}
          />
        ) : initials ? (
          <span>{initials}</span>
        ) : icon ? (
          icon
        ) : (
          <User
            className={clsx({
              "w-4 h-4": size === "xs",
              "w-5 h-5": size === "sm",
              "w-6 h-6": size === "md",
              "w-8 h-8": size === "lg",
              "w-10 h-10": size === "xl",
            })}
          />
        )}

        {status && (
          <span
            className={clsx(
              "absolute bottom-0 right-0 rounded-full border-2 border-white",
              statusColor[status],
              statusSize[size],
            )}
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
