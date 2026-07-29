import { forwardRef } from "react";

import type { ModalProps } from "./Modal.types";

import { ModalVariant } from "./Modal.variant";

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      onClose,
      title,
      footer,
      children,
      size = "md",
      variant = "default",
      closeOnOverlayClick = true,
      className,
      ...props
    },

    ref,
  ) => {
    if (!open) {
      return null;
    }

    return (
      <div
        className="
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    bg-black/50
                    p-4
                "
        onClick={() => {
          if (closeOnOverlayClick) {
            onClose?.();
          }
        }}
      >
        <div
          ref={ref}
          className={ModalVariant({
            size,
            variant,
            className,
          })}
          onClick={(event) => event.stopPropagation()}
          {...props}
        >
          {/* Header */}

          {title && (
            <div
              className="
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    px-6
                                    py-4
                                "
            >
              <h2
                className="
                                        text-lg
                                        font-semibold
                                    "
              >
                {title}
              </h2>

              <button
                type="button"
                onClick={onClose}
                className="
                                        text-gray-500
                                        hover:text-gray-900
                                    "
              >
                ✕
              </button>
            </div>
          )}

          <div
            className="
px-6
                            py-5
                        "
          >
            {children}
          </div>

          {/* Footer */}

          {footer && (
            <div
              className="
                                    flex
                                    justify-end
                                    gap-3
                                    border-t
                                    bg-gray-50
                                    px-6
                                    py-4
                                "
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";
