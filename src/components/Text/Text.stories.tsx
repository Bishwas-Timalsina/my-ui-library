import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "heading",
        "subHeading",
        "body",
        "link",
        "error",
        "reverse",
        "disabled",
      ],
    },
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
    },
    weight: {
      control: "select",
      options: [
        "thin",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
      ],
    },
    align: {
      control: "select",
      options: ["left", "right", "center", "justify"],
    },
    iconPosition: { control: "select", options: ["left", "right"] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    children: "This is a heading",
    variant: "heading",
    size: "2xl",
    weight: "bold",
  },
};
export const Body: Story = {
  args: { children: "This is body text", variant: "body" },
};
export const Link: Story = {
  args: { children: "This is a link", variant: "link" },
};
export const ErrorText: Story = {
  args: { children: "This is an error", variant: "error" },
};
export const Disabled: Story = {
  args: { children: "This is disabled", variant: "disabled" },
};
export const Truncated: Story = {
  args: {
    children: "This is a very long text that should truncate at some point",
    truncate: true,
  },
};
export const WithIcon: Story = {
  args: { children: "Label with icon", icon: <span>⭐</span> },
};
export const IconRight: Story = {
  args: {
    children: "Icon on right",
    icon: <span>⭐</span>,
    iconPosition: "right",
  },
};
