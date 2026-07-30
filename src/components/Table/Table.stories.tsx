import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "./Table";
import type { TableProps } from "./Table.types";

import { Badge } from "../Badge";
import { Button } from "../Button";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
};

const data: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Teacher",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Student",
    status: "Active",
  },
];

const columns: TableProps<User>["columns"] = [
  {
    key: "id",
    title: "ID",
    width: 80,
    align: "center",
  },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "role",
    title: "Role",
    align: "center",
  },
  {
    key: "status",
    title: "Status",
    align: "center",
    render: (value) => (
      <Badge
        label={String(value)}
        variant={value === "Active" ? "success" : "error"}
      />
    ),
  },
  {
    key: "action",
    title: "Action",
    align: "center",
    render: () => <Button size="sm" label="View" />,
  },
];

/**
 * Wrapper component for Storybook
 */
const UserTable = (props: TableProps<User>) => <Table<User> {...props} />;

const meta = {
  title: "Components/Table",
  component: UserTable,
  tags: ["autodocs"],

  args: {
    columns,
    data,
    rowKey: "id",

    variant: "default",
    size: "md",

    hoverable: true,
    striped: false,

    responsive: true,
    stickyHeader: false,

    loading: false,

    emptyText: "No data available",
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "minimal"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    hoverable: {
      control: "boolean",
    },

    striped: {
      control: "boolean",
    },

    responsive: {
      control: "boolean",
    },

    stickyHeader: {
      control: "boolean",
    },

    loading: {
      control: "boolean",
    },

    onRowClick: {
      action: "rowClicked",
    },
  },
} satisfies Meta<typeof UserTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const Bordered: Story = {
  args: {
    variant: "bordered",
  },
};

export const Minimal: Story = {
  args: {
    variant: "minimal",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Striped: Story = {
  args: {
    striped: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const StickyHeader: Story = {
  render: (args) => (
    <div className="h-72 overflow-y-auto">
      <UserTable {...args} stickyHeader />
    </div>
  ),
};

export const ClickableRows: Story = {
  args: {
    onRowClick: (row) => {
      alert(`Clicked: ${row.name}`);
    },
  },
};
