import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";


import type { PaginationProps } from "./Pagination.types";
import { Pagination } from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],

  args: {
    page: 1,
    totalPages: 10,
    siblingCount: 1,
    variant: "solid",
    size: "md",
    rounded: "md",
    fullWidth: false,
    disabled: false,
    showFirstLast: true,
    showPrevNext: true,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "full"],
    },

    siblingCount: {
      control: {
        type: "number",
        min: 0,
        max: 3,
      },
    },

    fullWidth: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    showFirstLast: {
      control: "boolean",
    },

    showPrevNext: {
      control: "boolean",
    },

    page: {
      control: false,
    },

    onPageChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

const ControlledPagination = (args: PaginationProps) => {
  const [page, setPage] = useState(1);

  return <Pagination {...args} page={page} onPageChange={setPage} />;
};

export const Playground: Story = {
  render: (args) => <ControlledPagination {...args} />,
};

export const Solid: Story = {
  render: (args) => <ControlledPagination {...args} variant="solid" />,
};

export const Outline: Story = {
  render: (args) => <ControlledPagination {...args} variant="outline" />,
};

export const Ghost: Story = {
  render: (args) => <ControlledPagination {...args} variant="ghost" />,
};

export const Small: Story = {
  render: (args) => <ControlledPagination {...args} size="sm" />,
};

export const Medium: Story = {
  render: (args) => <ControlledPagination {...args} size="md" />,
};

export const Large: Story = {
  render: (args) => <ControlledPagination {...args} size="lg" />,
};

export const Rounded: Story = {
  render: (args) => <ControlledPagination {...args} rounded="full" />,
};

export const Disabled: Story = {
  render: (args) => <ControlledPagination {...args} disabled />,
};

export const NoFirstLast: Story = {
  render: (args) => <ControlledPagination {...args} showFirstLast={false} />,
};

export const NoPrevNext: Story = {
  render: (args) => <ControlledPagination {...args} showPrevNext={false} />,
};

export const ManyPages: Story = {
  render: (args) => <ControlledPagination {...args} totalPages={50} />,
};

export const FullWidth: Story = {
  render: (args) => <ControlledPagination {...args} fullWidth />,
};
