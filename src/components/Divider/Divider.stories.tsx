import type { Meta, StoryObj } from "@storybook/react-vite";

import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],

  args: {
    orientation: "horizontal",
    variant: "solid",
    size: "md",
    color: "default",
  },

  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },

    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
      ],
    },

    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};

export const Dashed: Story = {
  args: {
    variant: "dashed",
  },
};

export const Dotted: Story = {
  args: {
    variant: "dotted",
  },
};

export const WithLabel: Story = {
  args: {
    label: "OR",
  },
};

export const Sizes: Story = {
  render: () => (
    <div>
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Divider color="primary" />

      <Divider color="success" />

      <Divider color="warning" />

      <Divider color="error" />

      <Divider color="info" />
    </div>
  ),
};
