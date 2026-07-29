import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Switch } from "./Switch";
import type { SwitchProps } from "./Switch.types";

const SwitchStory = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],

  render: (args) => <SwitchStory {...args} />,

  args: {
    label: "Enable Notifications",
    variant: "primary",
    size: "md",
    disabled: false,
    helperText: "",
    error: "",
    fullWidth: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    disabled: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },

    helperText: {
      control: "text",
    },

    error: {
      control: "text",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const HelperText: Story = {
  args: {
    helperText: "Enable or disable notifications.",
  },
};

export const ErrorMessage: Story = {
  args: {
    variant: "error",
    error: "Something went wrong.",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Small" size="sm" defaultChecked />
      <Switch label="Medium" size="md" defaultChecked />
      <Switch label="Large" size="lg" defaultChecked />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Primary" variant="primary" defaultChecked />
      <Switch label="Secondary" variant="secondary" defaultChecked />
      <Switch label="Success" variant="success" defaultChecked />
      <Switch label="Warning" variant="warning" defaultChecked />
      <Switch label="Error" variant="error" defaultChecked />
    </div>
  ),
};
