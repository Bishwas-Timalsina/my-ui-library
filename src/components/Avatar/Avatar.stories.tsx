import type { Meta, StoryObj } from "@storybook/react-vite";
import { User, ShieldCheck } from "lucide-react";

import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],

  args: {
    name: "John Doe",
    size: "md",
    rounded: "full",
    background: "primary",
    border: false,
  },

  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "full"],
    },

    background: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error", "info"],
    },

    status: {
      control: "select",
      options: [undefined, "online", "offline", "away", "busy"],
    },

    border: {
      control: "boolean",
    },

    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Image: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "User Avatar",
  },
};

export const Initials: Story = {
  args: {
    name: "John Doe",
  },
};

export const SingleName: Story = {
  args: {
    name: "Taylor",
  },
};

export const Icon: Story = {
  args: {
    icon: <User size={24} />,
    name: undefined,
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <ShieldCheck size={24} />,
    background: "success",
    name: undefined,
  },
};

export const Online: Story = {
  args: {
    src: "https://i.pravatar.cc/301",
    status: "online",
  },
};

export const Offline: Story = {
  args: {
    src: "https://i.pravatar.cc/302",
    status: "offline",
  },
};

export const Away: Story = {
  args: {
    src: "https://i.pravatar.cc/303",
    status: "away",
  },
};

export const Busy: Story = {
  args: {
    src: "https://i.pravatar.cc/304",
    status: "busy",
  },
};

export const WithBorder: Story = {
  args: {
    src: "https://i.pravatar.cc/305",
    border: true,
  },
};

export const RoundedSquare: Story = {
  args: {
    src: "https://i.pravatar.cc/306",
    rounded: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="XS" size="xs" />
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
      <Avatar name="XL" size="xl" />
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar name="P" background="primary" />
      <Avatar name="S" background="secondary" />
      <Avatar name="S" background="success" />
      <Avatar name="W" background="warning" />
      <Avatar name="E" background="error" />
      <Avatar name="I" background="info" />
    </div>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div className="flex gap-6">
      <Avatar src="https://i.pravatar.cc/310" status="online" />

      <Avatar src="https://i.pravatar.cc/311" status="away" />

      <Avatar src="https://i.pravatar.cc/312" status="busy" />

      <Avatar src="https://i.pravatar.cc/313" status="offline" />
    </div>
  ),
};

export const Fallbacks: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar name="John Doe" />

      <Avatar name="Taylor" background="success" />

      <Avatar icon={<User size={22} />} background="warning" />

      <Avatar background="error" />
    </div>
  ),
};
