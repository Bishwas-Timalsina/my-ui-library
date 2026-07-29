import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Select } from "./Select";
import type { SelectProps } from "./Select.types";

const options = [
  { label: "Nepal", value: "np" },
  { label: "India", value: "in" },
  { label: "Japan", value: "jp" },
  { label: "Australia", value: "au" },
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
];

const SelectStory = (args: SelectProps) => {
  const [value, setValue] = useState<string | number>("");

  return <Select {...args} value={value} onChange={setValue} />;
};

const meta = {
  title: "Components/Select",

  component: Select,

  tags: ["autodocs"],

  render: (args) => <SelectStory {...args} />,

  args: {
    label: "Country",
    placeholder: "Select Country",
    options,
    variant: "default",
    size: "md",
    rounded: "md",
    fullWidth: false,
    searchable: false,
    clearable: false,
    disabled: false,
    helperText: "",
    error: "",
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "ghost", "error"],
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "full"],
    },

    searchable: {
      control: "boolean",
    },

    clearable: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Select>;

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
    error: "Country is required.",
  },
};

export const Searchable: Story = {
  args: {
    searchable: true,
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
    searchable: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-72">
      <Select size="xs" label="XS" options={options} />

      <Select size="sm" label="SM" options={options} />

      <Select size="md" label="MD" options={options} />

      <Select size="lg" label="LG" options={options} />

      <Select size="xl" label="XL" options={options} />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-72">
      <Select variant="default" label="Default" options={options} />

      <Select variant="outline" label="Outline" options={options} />

      <Select variant="filled" label="Filled" options={options} />

      <Select variant="ghost" label="Ghost" options={options} />

      <Select
        variant="error"
        label="Error"
        error="Required"
        options={options}
      />
    </div>
  ),
};
