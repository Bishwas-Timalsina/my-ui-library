import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",

  component: Modal,

  tags: ["autodocs"],

  args: {
    title: "Modal Title",

    size: "md",

    variant: "default",

    open: true,
  },

  argTypes: {
    size: {
      control: "select",

      options: ["sm", "md", "lg", "xl"],
    },

    variant: {
      control: "select",

      options: ["default", "danger", "success"],
    },

    closeOnOverlayClick: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "This is a modal component.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Confirm Action",

    children: "Are you sure you want to continue?",

    footer: (
      <>
        <button>Cancel</button>

        <button>Confirm</button>
      </>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-5">
      <Modal open title="Small" size="sm">
        Small Modal
      </Modal>

      <Modal open title="Medium" size="md">
        Medium Modal
      </Modal>

      <Modal open title="Large" size="lg">
        Large Modal
      </Modal>

      <Modal open title="Extra Large" size="xl">
        Extra Large Modal
      </Modal>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-5">
      <Modal open title="Default" variant="default">
        Default Modal
      </Modal>

      <Modal open title="Success" variant="success">
        Success Modal
      </Modal>

      <Modal open title="Danger" variant="danger">
        Danger Modal
      </Modal>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Controlled Modal"
        >
          Modal controlled by state.
        </Modal>
      </>
    );
  },
};
