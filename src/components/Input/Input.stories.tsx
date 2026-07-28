import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search, Mail, Eye } from "lucide-react";

import Input from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,

  tags: ["autodocs"],

  args: {
    label: "Email",
    placeholder: "Enter your email",
    variant: "default",
    state: "default",
    inputSize: "md",
    rounded: "md",
    fullWidth: true,
    disabled: false,
    required: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "ghost"],
    },

    state: {
      control: "select",
      options: ["default", "error", "success", "warning"],
    },

    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },

    fullWidth: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    required: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    error: "Email is required",
  },
};

export const Success: Story = {
  args: {
    state: "success",
    helperText: "Looks good!",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
    helperText: "Double-check this value.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithPrefix: Story = {
  args: {
    leftIcon: <Mail size={18} />,
  },
};

export const WithSuffix: Story = {
  args: {
    rightIcon: <Eye size={18} />,
    type: "password",
  },
};

export const SearchInput: Story = {
  args: {
    leftIcon: <Search size={18} />,
    placeholder: "Search...",
    label: "Search",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input label="Small" inputSize="sm" placeholder="Small input" />
      <Input label="Medium" inputSize="md" placeholder="Medium input" />
      <Input label="Large" inputSize="lg" placeholder="Large input" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input label="Default" />

      <Input label="Success" state="success" helperText="Looks good!" />

      <Input label="Warning" state="warning" helperText="Needs attention." />

      <Input label="Error" state="error" error="This field is required." />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input variant="default" label="Default" />
      <Input variant="outline" label="Outline" />
      <Input variant="filled" label="Filled" />
      <Input variant="ghost" label="Ghost" />
    </div>
  ),
};
