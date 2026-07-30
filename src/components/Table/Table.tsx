import { forwardRef } from "react";
import clsx from "clsx";

import {
  TableContainerVariant,
  TableVariant,
  TableHeadVariant,
  TableRowVariant,
  TableCellVariant,
} from "./Table.variant";

import type { TableProps } from "./Table.types";

function TableComponent<T extends Record<string, unknown>>(
  {
    columns,
    data,
    rowKey,

    loading = false,
    emptyText = "No data available",

    variant = "default",
    size = "md",

    hoverable = true,
    striped = false,

    stickyHeader = false,
    responsive = true,

    onRowClick,

    className,
    ...props
  }: TableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const getRowKey = (record: T, index: number) => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }

    if (typeof rowKey === "string") {
      return String(record[rowKey]);
    }

    return index;
  };

  return (
    <div
      ref={ref}
      className={clsx(
        TableContainerVariant({
          responsive,
        }),
        className,
      )}
      {...props}
    >
      <table
        className={TableVariant({
          variant,
        })}
      >
        <thead
          className={TableHeadVariant({
            sticky: stickyHeader,
          })}
        >
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                style={{
                  width: column.width,
                }}
                className={TableCellVariant({
                  size,
                  align: column.align,
                })}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-10 text-text-muted"
              >
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-10 text-text-muted"
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((record, index) => (
              <tr
                key={getRowKey(record, index)}
                onClick={() => onRowClick?.(record, index)}
                className={TableRowVariant({
                  hoverable: !!onRowClick && hoverable,
                  striped,
                })}
              >
                {columns.map((column) => {
                  const value = record[column.key as keyof T];

                  return (
                    <td
                      key={String(column.key)}
                      className={TableCellVariant({
                        size,
                        align: column.align,
                      })}
                    >
                      {column.render
                        ? column.render(value, record, index)
                        : String(value ?? "")}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export const Table = forwardRef(TableComponent) as <
  T extends Record<string, unknown>,
>(
  props: TableProps<T> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement;
