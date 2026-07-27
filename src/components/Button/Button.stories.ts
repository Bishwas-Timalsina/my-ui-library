

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    tags: ["autodocs"],
    component: Button,
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "disabled", "error", "ghost"],
        },
    },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: { label: "Primary Button", variant: "primary" },
};
export const Secondary: Story = {
    args: { label: "Secondary Button", variant: "secondary" },
};
export const ErrorVariant: Story = {
    args: { label: "Error Variant Button", variant: "error" },
};
export const Ghost: Story = {
    args: { label: "Ghost Button", variant: "ghost" },
};
export const Disabled: Story = {
    args: { label: "Disabled Button", variant: "disabled" },
};
export const Loading: Story = {
    args: { label: "Loading Button", variant: "loading" },
};
export const WithIcon: Story = {
    args: {
        label: "With Icon Button",
        variant: "primary",
        // icon: <span>⭐</span>,
    },
};
export const InvertedIcon: Story = {
    args: {
        label: "Inverted Icon Button",
        variant: "primary",
        // icon: <span>⭐</span>,
    },
};
