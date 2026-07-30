import { forwardRef } from "react";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

import {
  PaginationContainerVariant,
  PaginationButtonVariant,
} from "./Pagination.variant";

import type { PaginationProps } from "./Pagination.types";

const DOTS = "...";

const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): (number | string)[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  if (!showLeftDots && showRightDots) {
    const leftItems = 3 + siblingCount * 2;

    return [
      ...Array.from({ length: leftItems }, (_, i) => i + 1),
      DOTS,
      totalPages,
    ];
  }

  if (showLeftDots && !showRightDots) {
    const rightItems = 3 + siblingCount * 2;

    return [
      1,
      DOTS,
      ...Array.from(
        { length: rightItems },
        (_, i) => totalPages - rightItems + i + 1,
      ),
    ];
  }

  return [
    1,
    DOTS,
    ...Array.from(
      { length: rightSibling - leftSibling + 1 },
      (_, i) => leftSibling + i,
    ),
    DOTS,
    totalPages,
  ];
};

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      page,
      totalPages,
      onPageChange,

      siblingCount = 1,

      showFirstLast = true,
      showPrevNext = true,

      variant = "solid",
      size = "md",
      rounded = "md",

      fullWidth = false,
      disabled = false,

      className,
      ...props
    },
    ref,
  ) => {
    const paginationRange = getPaginationRange(page, totalPages, siblingCount);

    const changePage = (newPage: number) => {
      if (disabled || newPage < 1 || newPage > totalPages) return;

      onPageChange(newPage);
    };

    return (
      <div
        ref={ref}
        className={clsx(
          PaginationContainerVariant({
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {/* First */}
        {showFirstLast && (
          <button
            type="button"
            disabled={disabled || page === 1}
            onClick={() => changePage(1)}
            className={PaginationButtonVariant({
              variant,
              size,
              rounded,
            })}
            aria-label="First page"
          >
            <ChevronsLeft size={18} />
          </button>
        )}

        {/* Previous */}
        {showPrevNext && (
          <button
            type="button"
            disabled={disabled || page === 1}
            onClick={() => changePage(page - 1)}
            className={PaginationButtonVariant({
              variant,
              size,
              rounded,
            })}
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {/* Numbers */}
        {paginationRange.map((item, index) => {
          if (item === DOTS) {
            return (
              <span
                key={`dots-${index}`}
                className="flex items-center justify-center px-2"
              >
                <MoreHorizontal size={18} />
              </span>
            );
          }

          return (
            <button
              key={item}
              type="button"
              onClick={() => changePage(Number(item))}
              disabled={disabled}
              aria-current={page === item ? "page" : undefined}
              className={PaginationButtonVariant({
                variant,
                size,
                rounded,
                active: page === item,
              })}
            >
              {item}
            </button>
          );
        })}

        {/* Next */}
        {showPrevNext && (
          <button
            type="button"
            disabled={disabled || page === totalPages}
            onClick={() => changePage(page + 1)}
            className={PaginationButtonVariant({
              variant,
              size,
              rounded,
            })}
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        )}

        {/* Last */}
        {showFirstLast && (
          <button
            type="button"
            disabled={disabled || page === totalPages}
            onClick={() => changePage(totalPages)}
            className={PaginationButtonVariant({
              variant,
              size,
              rounded,
            })}
            aria-label="Last page"
          >
            <ChevronsRight size={18} />
          </button>
        )}
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
