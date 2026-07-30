import type { Meta, StoryObj } from "@storybook/react-vite";
import { Shield, RefreshCcw } from "lucide-react";

import { Alert } from "./Alert";
import { Button } from "../Button";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],

  args: {
    title: "Information",
    description: "This is an alert message.",
    variant: "info",
    appearance: "soft",
    rounded: "md",
    fullWidth: false,
    closable: false,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },

    appearance: {
      control: "select",
      options: ["soft", "solid", "outline"],
    },

    rounded: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    fullWidth: {
      control: "boolean",
    },

    closable: {
      control: "boolean",
    },

    icon: {
      control: false,
    },

    action: {
      control: false,
    },

    onClose: {
      action: "closed",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informational alert.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your profile has been updated successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Your subscription will expire soon.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong.",
  },
};

export const Solid: Story = {
  args: {
    appearance: "solid",
    variant: "success",
    title: "Solid Alert",
    description: "Solid appearance example.",
  },
};

export const Outline: Story = {
  args: {
    appearance: "outline",
    variant: "warning",
    title: "Outline Alert",
    description: "Outline appearance example.",
  },
};

export const Soft: Story = {
  args: {
    appearance: "soft",
    variant: "info",
    title: "Soft Alert",
    description: "Soft appearance example.",
  },
};

export const Closable: Story = {
  args: {
    closable: true,
    variant: "error",
    title: "Dismissible Alert",
    description: "Click the close icon.",
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <Shield size={22} />,
    variant: "success",
    title: "Protected",
    description: "Your account is secured.",
  },
};

export const WithAction: Story = {
  args: {
    variant: "warning",
    title: "Network Error",
    description: "Please try again.",
    action: <Button label="Retry" size="sm" icon={<RefreshCcw size={16} />} />,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    title: "Full Width Alert",
    description: "This alert stretches to the container width.",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        variant="info"
        title="Information"
        description="This is an informational alert."
      />

      <Alert
        variant="success"
        title="Success"
        description="Operation completed successfully."
      />

      <Alert
        variant="warning"
        title="Warning"
        description="Please review your settings."
      />

      <Alert
        variant="error"
        title="Error"
        description="Something went wrong."
      />
    </div>
  ),
};

export const Appearances: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert appearance="soft" title="Soft" description="Soft appearance." />

      <Alert
        appearance="outline"
        title="Outline"
        description="Outline appearance."
      />

      <Alert
        appearance="solid"
        variant="success"
        title="Solid"
        description="Solid appearance."
      />
    </div>
  ),
};

export const AllFeatures: Story = {
  render: () => (
    <Alert
      variant="success"
      appearance="soft"
      title="Deployment Successful"
      description="Your application has been deployed successfully."
      closable
      icon={<Shield size={22} />}
      action={<Button label="View" size="sm" />}
    />
  ),
};
