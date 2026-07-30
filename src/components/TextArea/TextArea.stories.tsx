import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Search } from "lucide-react";

import { TextArea } from "./TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],

  args: {
    label: "Description",
    placeholder: "Write something...",
    variant: "default",
    state: "default",
    size: "md",
    rounded: "md",
    resize: "vertical",
    rows: 4,
    fullWidth: true,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "ghost"],
    },

    state: {
      control: "select",
      options: ["default", "success", "warning", "error"],
    },

    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },

    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },

    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
    },

    rows: {
      control: {
        type: "number",
      },
    },

    fullWidth: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    required: {
      control: "boolean",
    },

    startAdornment: {
      control: false,
    },

    endAdornment: {
      control: false,
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const Success: Story = {
  args: {
    state: "success",
    helperText: "Looks good!",
  },
};

export const Warning: Story = {
  args: {
    state: "warning",
    helperText: "Please review this field.",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    error: "Description is required.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "This textarea is disabled.",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithStartAdornment: Story = {
  args: {
    startAdornment: <Search size={18} />,
    placeholder: "Search notes...",
  },
};

export const WithEndAdornment: Story = {
  args: {
    endAdornment: <Mail size={18} />,
    placeholder: "Email description...",
  },
};

export const LargeRows: Story = {
  args: {
    rows: 8,
  },
};

export const ResizeNone: Story = {
  args: {
    resize: "none",
  },
};

export const ResizeHorizontal: Story = {
  args: {
    resize: "horizontal",
  },
};

export const ResizeVertical: Story = {
  args: {
    resize: "vertical",
  },
};

export const ResizeBoth: Story = {
  args: {
    resize: "both",
  },
};

export const RoundedFull: Story = {
  args: {
    rounded: "full",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TextArea size="sm" placeholder="Small TextArea" />

      <TextArea size="md" placeholder="Medium TextArea" />

      <TextArea size="lg" placeholder="Large TextArea" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <TextArea variant="default" placeholder="Default" />

      <TextArea variant="outline" placeholder="Outline" />

      <TextArea variant="filled" placeholder="Filled" />

      <TextArea variant="ghost" placeholder="Ghost" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <TextArea state="success" helperText="Everything looks good." />

      <TextArea state="warning" helperText="Please double-check." />

      <TextArea state="error" error="This field is required." />
    </div>
  ),
};
