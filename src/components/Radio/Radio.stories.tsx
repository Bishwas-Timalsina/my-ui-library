import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Radio } from "./Radio";
import type { RadioProps } from "./Radio.types";

const RadioStory = (args: RadioProps) => {
  const [value, setValue] = useState("option1");

  return (
    <div className="space-y-3">
      <Radio
        {...args}
        name="storybook-radio"
        label="Option 1"
        value="option1"
        checked={value === "option1"}
        onChange={() => setValue("option1")}
      />

      <Radio
        {...args}
        name="storybook-radio"
        label="Option 2"
        value="option2"
        checked={value === "option2"}
        onChange={() => setValue("option2")}
      />

      <Radio
        {...args}
        name="storybook-radio"
        label="Option 3"
        value="option3"
        checked={value === "option3"}
        onChange={() => setValue("option3")}
      />
    </div>
  );
};

const meta = {
  title: "Components/Radio",

  component: Radio,

  tags: ["autodocs"],

  render: (args) => <RadioStory {...args} />,

  args: {
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
} satisfies Meta<typeof Radio>;

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
    helperText: "Choose one option.",
  },
};

export const ErrorMessage: Story = {
  args: {
    error: "Please select an option.",
    variant: "error",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio label="Small" name="sizes" size="sm" defaultChecked />

      <Radio label="Medium" name="sizes" size="md" />

      <Radio label="Large" name="sizes" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio label="Primary" name="variants" variant="primary" defaultChecked />

      <Radio label="Secondary" name="variants" variant="secondary" />

      <Radio label="Success" name="variants" variant="success" />

      <Radio label="Warning" name="variants" variant="warning" />

      <Radio label="Error" name="variants" variant="error" />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState("react");

    return (
      <div className="space-y-3">
        <Radio
          label="React"
          name="framework"
          value="react"
          checked={value === "react"}
          onChange={() => setValue("react")}
        />

        <Radio
          label="Vue"
          name="framework"
          value="vue"
          checked={value === "vue"}
          onChange={() => setValue("vue")}
        />

        <Radio
          label="Angular"
          name="framework"
          value="angular"
          checked={value === "angular"}
          onChange={() => setValue("angular")}
        />

        <Radio
          label="Svelte"
          name="framework"
          value="svelte"
          checked={value === "svelte"}
          onChange={() => setValue("svelte")}
        />
      </div>
    );
  },
};
