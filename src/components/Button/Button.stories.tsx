import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Plus, Search, Trash2 } from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  args: {
    label: "Button",
    variant: "primary",
    size: "md",
    rounded: "md",
    fullWidth: false,
    isLoading: false,
    disabled: false,
    invert: false,
    textSize: "md",
    textWeight: "normal",
  },

  argTypes: {
    onClick: { action: "clicked" },

    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "ghost",
        "outline",
        "link",
        "success",
        "warning",
        "error",
      ],
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "full"],
    },

    fullWidth: {
      control: "boolean",
    },

    isLoading: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    invert: {
      control: "boolean",
    },

    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    label: "Link",
    variant: "link",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Delete",
    variant: "error",
  },
};

export const Loading: Story = {
  args: {
    label: "Saving",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const LeftIcon: Story = {
  args: {
    label: "Add",
    icon: <Plus size={18} />,
    invert: true,
  },
};

export const RightIcon: Story = {
  args: {
    label: "Search",
    icon: <Search size={18} />,
  },
};

export const IconOnly: Story = {
  args: {
    icon: <Trash2 size={18} />,
    variant: "ghost",
    "aria-label": "Delete",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Continue",
    fullWidth: true,
  },
};

export const Rounded: Story = {
  args: {
    label: "Rounded",
    rounded: "full",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button label="XS" size="xs" />
      <Button label="SM" size="sm" />
      <Button label="MD" size="md" />
      <Button label="LG" size="lg" />
      <Button label="XL" size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Outline" variant="outline" />
      <Button label="Link" variant="link" />
      <Button label="Success" variant="success" />
      <Button label="Warning" variant="warning" />
      <Button label="Error" variant="error" />
    </div>
  ),
};
