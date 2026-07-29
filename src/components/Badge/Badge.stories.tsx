import type { Meta, StoryObj } from "@storybook/react-vite";
import { Atom } from "lucide-react";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],

  args: {
    label: "Badge",
    variant: "primary",
    appearance: "solid",
    size: "md",
    rounded: "full",
    dot: false,
    removable: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error", "info"],
    },

    appearance: {
      control: "select",
      options: ["solid", "outline", "soft"],
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },

    rounded: {
      control: "select",
      options: ["sm", "md", "full"],
    },

    dot: {
      control: "boolean",
    },

    removable: {
      control: "boolean",
    },

    onRemove: {
      action: "removed",
    },

    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Badge>;

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
    label: "Error",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    label: "Info",
    variant: "info",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline",
    appearance: "outline",
  },
};

export const Soft: Story = {
  args: {
    label: "Soft",
    appearance: "soft",
  },
};

export const WithIcon: Story = {
  args: {
    label: "React",
    icon: <Atom size={14} />,
  },
};

export const WithDot: Story = {
  args: {
    label: "Online",
    dot: true,
    variant: "success",
  },
};

export const Removable: Story = {
  args: {
    label: "React",
    removable: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge label="XS" size="xs" />
      <Badge label="SM" size="sm" />
      <Badge label="MD" size="md" />
      <Badge label="LG" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge label="Primary" variant="primary" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
    </div>
  ),
};

export const Appearances: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge label="Solid" appearance="solid" />
      <Badge label="Outline" appearance="outline" />
      <Badge label="Soft" appearance="soft" />
    </div>
  ),
};

export const AllFeatures: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge label="React" icon={<Atom size={14} />} variant="primary" />

      <Badge label="Online" dot variant="success" />

      <Badge label="Tag" removable appearance="soft" variant="warning" />

      <Badge label="Outline" appearance="outline" variant="info" />
    </div>
  ),
};
