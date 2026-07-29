import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import Text from "../Text";

const meta = {
  title: "Components/Card",

  component: Card,

  tags: ["autodocs"],

  args: {
    variant: "default",
    padding: "md",
    rounded: "md",
    shadow: "sm",
    fullWidth: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "ghost",
        "primary",
        "success",
        "warning",
        "error",
      ],
    },

    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "full"],
    },

    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },

    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <Text content="This is a reusable Card component." weight="medium" />
    </Card>
  ),
};

export const Default: Story = {
  render: () => (
    <Card>
      <Text content="Default Card" />
    </Card>
  ),
};

export const Outline: Story = {
  render: () => (
    <Card variant="outline">
      <Text content="Outline Card" />
    </Card>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Card variant="ghost">
      <Text content="Ghost Card" />
    </Card>
  ),
};

export const Primary: Story = {
  render: () => (
    <Card variant="primary">
      <Text content="Primary Card" />
    </Card>
  ),
};

export const Success: Story = {
  render: () => (
    <Card variant="success">
      <Text content="Success Card" />
    </Card>
  ),
};

export const Warning: Story = {
  render: () => (
    <Card variant="warning">
      <Text content="Warning Card" />
    </Card>
  ),
};

export const Error: Story = {
  render: () => (
    <Card variant="error">
      <Text content="Error Card" />
    </Card>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-5">
      <Card shadow="none">
        <Text content="None" />
      </Card>

      <Card shadow="sm">
        <Text content="Small" />
      </Card>

      <Card shadow="md">
        <Text content="Medium" />
      </Card>

      <Card shadow="lg">
        <Text content="Large" />
      </Card>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div className="flex gap-5">
      <Card padding="sm">
        <Text content="Small Padding" />
      </Card>

      <Card padding="md">
        <Text content="Medium Padding" />
      </Card>

      <Card padding="lg">
        <Text content="Large Padding" />
      </Card>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Card fullWidth>
      <Text content="This card takes full width." />
    </Card>
  ),
};
