import { forwardRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import {
  TabsListVariant,
  TabTriggerVariant,
  TabContentVariant,
} from "./Tabs.variant";

import type { TabsProps } from "./Tabs.types";

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      value,
      defaultValue,
      onValueChange,
      variant = "solid",
      size = "md",
      rounded = "md",
      orientation = "horizontal",
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    const firstEnabledTab = useMemo(
      () => items.find((tab) => !tab.disabled)?.value ?? "",
      [items],
    );

    const [selectedTab, setSelectedTab] = useState(
      defaultValue ?? firstEnabledTab,
    );

    const activeTab = value ?? selectedTab;

    useEffect(() => {
      if (!defaultValue && !value) {
        setSelectedTab(firstEnabledTab);
      }
    }, [firstEnabledTab, defaultValue, value]);

    const handleChange = (tabValue: string) => {
      if (value === undefined) {
        setSelectedTab(tabValue);
      }

      onValueChange?.(tabValue);
    };

    const currentTab = items.find((item) => item.value === activeTab);

    return (
      <div
        ref={ref}
        className={clsx(
          "flex gap-4",
          orientation === "vertical" ? "flex-row" : "flex-col",
          className,
        )}
        {...props}
      >
        {/* Tab List */}
        <div
          role="tablist"
          aria-orientation={orientation}
          className={TabsListVariant({
            orientation,
            fullWidth,
          })}
        >
          {items.map((tab) => {
            const active = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                role="tab"
                type="button"
                disabled={tab.disabled}
                aria-selected={active}
                aria-controls={`tabpanel-${tab.value}`}
                id={`tab-${tab.value}`}
                onClick={() => handleChange(tab.value)}
                className={TabTriggerVariant({
                  variant,
                  size,
                  rounded,
                  active,
                  fullWidth,
                })}
              >
                {tab.icon && (
                  <span className="flex items-center">{tab.icon}</span>
                )}

                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className={TabContentVariant()}
        >
          {currentTab?.content}
        </div>
      </div>
    );
  },
);

Tabs.displayName = "Tabs";
