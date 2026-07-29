import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox.types";

const CheckboxStory = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

const meta = {
  title: "Components/Checkbox",

  component: Checkbox,

  tags: ["autodocs"],

  render: (args) => <CheckboxStory {...args} />,

  args: {
    label: "Accept Terms & Conditions",
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
  },
} satisfies Meta<typeof Checkbox>;

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
    helperText: "You can change this later.",
  },
};

export const ErrorMessage: Story = {
  args: {
    error: "This field is required.",
    variant: "error",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Primary" variant="primary" />
      <Checkbox label="Secondary" variant="secondary" />
      <Checkbox label="Success" variant="success" />
      <Checkbox label="Warning" variant="warning" />
      <Checkbox label="Error" variant="error" />
    </div>
  ),
};
