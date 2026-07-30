import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home, User, Settings, Bell } from "lucide-react";

import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],

  args: {
    variant: "solid",
    size: "md",
    rounded: "md",
    orientation: "horizontal",
    fullWidth: false,
    defaultValue: "home",

    items: [
      {
        label: "Home",
        value: "home",
        content: <div>Home Content</div>,
      },
      {
        label: "Profile",
        value: "profile",
        content: <div>Profile Content</div>,
      },
      {
        label: "Settings",
        value: "settings",
        content: <div>Settings Content</div>,
      },
    ],
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "underline"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "full"],
    },

    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },

    fullWidth: {
      control: "boolean",
    },

    items: {
      control: false,
    },

    onValueChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};

export const Rounded: Story = {
  args: {
    rounded: "full",
  },
};

export const WithIcons: Story = {
  args: {
    defaultValue: "home",
    items: [
      {
        label: "Home",
        value: "home",
        icon: <Home size={16} />,
        content: <div>Home Content</div>,
      },
      {
        label: "Profile",
        value: "profile",
        icon: <User size={16} />,
        content: <div>Profile Content</div>,
      },
      {
        label: "Notifications",
        value: "notifications",
        icon: <Bell size={16} />,
        content: <div>Notifications Content</div>,
      },
      {
        label: "Settings",
        value: "settings",
        icon: <Settings size={16} />,
        content: <div>Settings Content</div>,
      },
    ],
  },
};

export const DisabledTab: Story = {
  args: {
    defaultValue: "home",
    items: [
      {
        label: "Home",
        value: "home",
        content: <div>Home Content</div>,
      },
      {
        label: "Profile",
        value: "profile",
        content: <div>Profile Content</div>,
      },
      {
        label: "Settings",
        value: "settings",
        disabled: true,
        content: <div>Settings Content</div>,
      },
    ],
  },
};

export const Variants: Story = {
  render: () => {
    const items = [
      {
        label: "Home",
        value: "home",
        content: <div>Home Content</div>,
      },
      {
        label: "Profile",
        value: "profile",
        content: <div>Profile Content</div>,
      },
      {
        label: "Settings",
        value: "settings",
        content: <div>Settings Content</div>,
      },
    ];

    return (
      <div className="space-y-8">
        <Tabs items={items} variant="solid" />

        <Tabs items={items} variant="soft" />

        <Tabs items={items} variant="outline" />

        <Tabs items={items} variant="underline" />
      </div>
    );
  },
};

export const AllFeatures: Story = {
  args: {
    variant: "outline",
    rounded: "full",
    fullWidth: true,
    defaultValue: "dashboard",

    items: [
      {
        label: "Dashboard",
        value: "dashboard",
        icon: <Home size={16} />,
        content: <div className="p-4">Dashboard Content</div>,
      },
      {
        label: "Profile",
        value: "profile",
        icon: <User size={16} />,
        content: <div className="p-4">Profile Content</div>,
      },
      {
        label: "Notifications",
        value: "notifications",
        icon: <Bell size={16} />,
        content: <div className="p-4">Notifications Content</div>,
      },
      {
        label: "Settings",
        value: "settings",
        icon: <Settings size={16} />,
        disabled: true,
        content: <div className="p-4">Settings Content</div>,
      },
    ],
  },
};
