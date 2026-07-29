import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],

  args: {
    size: "md",
    variant: "primary",
    type: "border",
  },

  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error", "info"],
    },

    type: {
      control: "select",
      options: ["border", "dots"],
    },

    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />

      <Spinner size="sm" />

      <Spinner size="md" />

      <Spinner size="lg" />

      <Spinner size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Spinner variant="primary" />

      <Spinner variant="success" />

      <Spinner variant="warning" />

      <Spinner variant="error" />

      <Spinner variant="info" />
    </div>
  ),
};

export const Dots: Story = {
  args: {
    type: "dots",
  },
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner />

      <span>Loading data...</span>
    </div>
  ),
};
