import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleAlert, CircleCheck, Info, Link2 } from "lucide-react";

import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],

  args: {
    children: "Lorem ipsum dolor sit amet.",
    variant: "body",
    size: "md",
    weight: "normal",
    align: "left",
    truncate: false,
    uppercase: false,
    italic: false,
    underline: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: [
        "heading",
        "subHeading",
        "body",
        "link",
        "error",
        "success",
        "warning",
        "info",
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
      control: "inline-radio",
      options: ["left", "center", "right", "justify"],
    },

    truncate: {
      control: "boolean",
    },

    uppercase: {
      control: "boolean",
    },

    italic: {
      control: "boolean",
    },

    underline: {
      control: "boolean",
    },

    icon: {
      control: false,
    },

    iconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Heading: Story = {
  args: {
    children: "Heading Text",
    variant: "heading",
    size: "4xl",
    weight: "bold",
  },
};

export const SubHeading: Story = {
  args: {
    children: "Sub Heading",
    variant: "subHeading",
    size: "2xl",
    weight: "semibold",
  },
};

export const Body: Story = {
  args: {
    children:
      "This is a body text example that demonstrates normal reading content.",
    variant: "body",
  },
};

export const Link: Story = {
  args: {
    children: "Click here",
    variant: "link",
    underline: true,
    icon: <Link2 size={16} />,
  },
};

export const Error: Story = {
  args: {
    children: "Something went wrong.",
    variant: "error",
    icon: <CircleAlert size={16} />,
  },
};

export const Success: Story = {
  args: {
    children: "Saved successfully.",
    variant: "success",
    icon: <CircleCheck size={16} />,
  },
};

export const InfoText: Story = {
  args: {
    children: "Information message.",
    variant: "info",
    icon: <Info size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Text",
    variant: "disabled",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text size="2xs">2XS</Text>
      <Text size="xs">XS</Text>
      <Text size="sm">SM</Text>
      <Text size="md">MD</Text>
      <Text size="lg">LG</Text>
      <Text size="xl">XL</Text>
      <Text size="2xl">2XL</Text>
      <Text size="3xl">3XL</Text>
      <Text size="4xl">4XL</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text weight="thin">Thin</Text>
      <Text weight="light">Light</Text>
      <Text weight="normal">Normal</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="bold">Bold</Text>
      <Text weight="extrabold">Extra Bold</Text>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4 w-96 border p-4">
      <Text align="left">Left aligned</Text>
      <Text align="center">Center aligned</Text>
      <Text align="right">Right aligned</Text>
      <Text align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
      </Text>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text icon={<Info size={16} />}>Left Icon</Text>

      <Text icon={<Info size={16} />} iconPosition="right">
        Right Icon
      </Text>
    </div>
  ),
};

export const TextTransform: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text uppercase>Uppercase</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text italic underline uppercase>
        Combined Styles
      </Text>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div className="w-64 border p-2">
      <Text truncate>
        This is a very long line of text that should truncate with an ellipsis
        when it exceeds the available width.
      </Text>
    </div>
  ),
};
