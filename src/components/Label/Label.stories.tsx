import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],

  args: {
    children: "Email Address",
    variant: "default",
    size: "md",
    required: false,
    optional: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error", "muted"],
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },

    required: {
      control: "boolean",
    },

    optional: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Optional: Story = {
  args: {
    optional: true,
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Label size="xs">Extra Small</Label>
      <Label size="sm">Small</Label>
      <Label size="md">Medium</Label>
      <Label size="lg">Large</Label>
    </div>
  ),
};
