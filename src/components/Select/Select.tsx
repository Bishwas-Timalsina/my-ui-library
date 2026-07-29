import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { Check, ChevronDown, Search, X } from "lucide-react";

import { SelectVariant } from "./Select.variant";
import type { SelectOption, SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      placeholder = "Select...",
      options,
      value,
      onChange,
      helperText,
      error,
      disabled = false,
      searchable = false,
      clearable = false,
      variant = error ? "error" : "default",
      size = "md",
      rounded = "md",
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const selectedOption = useMemo(
      () => options.find((item) => item.value === value),
      [options, value],
    );

    const filteredOptions = useMemo(() => {
      if (!searchable || !search.trim()) return options;

      return options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase()),
      );
    }, [options, search, searchable]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;

      onChange?.(option.value);

      setIsOpen(false);
      setSearch("");
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      onChange?.("" as never);

      setSearch("");
    };

    return (
      <div
        ref={ref}
        className={clsx("flex flex-col gap-1", fullWidth && "w-full")}
        {...props}
      >
        {label && <label className="text-sm font-medium">{label}</label>}

        <div ref={containerRef} className="relative">
          <button
            type="button"
            disabled={disabled}
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
            className={SelectVariant({
              variant,
              size,
              rounded,
              fullWidth,
              disabled,
              className: clsx(className),
            })}
          >
            <span
              className={clsx(
                "truncate flex-1 text-left",
                !selectedOption && "text-text-secondary",
              )}
            >
              {selectedOption?.label ?? placeholder}
            </span>

            <div className="flex items-center gap-2">
              {clearable && selectedOption && (
                <button type="button" onClick={handleClear}>
                  <X size={16} />
                </button>
              )}

              <ChevronDown
                size={18}
                className={clsx("transition-transform", isOpen && "rotate-180")}
              />
            </div>
          </button>

          {isOpen && (
            <div className="absolute z-50 mt-2 w-full rounded-lg border border-border-primary bg-white shadow-lg">
              {searchable && (
                <div className="relative p-2">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                  />

                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-md border border-border-primary py-2 pl-9 pr-3 outline-none"
                  />
                </div>
              )}

              <ul className="max-h-60 overflow-auto py-1">
                {filteredOptions.length === 0 && (
                  <li className="px-4 py-3 text-sm text-text-secondary">
                    No options found.
                  </li>
                )}

                {filteredOptions.map((option) => {
                  const selected = option.value === value;

                  return (
                    <li
                      key={option.value}
                      onClick={() => handleSelect(option)}
                      className={clsx(
                        "flex cursor-pointer items-center justify-between px-4 py-2 transition-colors",
                        option.disabled && "cursor-not-allowed opacity-50",
                        !option.disabled && "hover:bg-primary-extraLight",
                      )}
                    >
                      <span>{option.label}</span>

                      {selected && (
                        <Check size={16} className="text-primary-base" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {(helperText || error) && (
          <span
            className={clsx(
              "text-xs",
              error ? "text-error-base" : "text-text-secondary",
            )}
          >
            {error ?? helperText}
          </span>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
