import type { Meta, StoryObj } from "@storybook/react";
import { DefaultStoriesDecorator } from "../_internal/DefaultStoriesDecorator";
import { WSwitch } from "./WSwitch";

const meta = {
  title: "Components/WSwitch",
  component: WSwitch,
  decorators: DefaultStoriesDecorator,
  args: {
    value: false,
    label: undefined,
    onChange: () => {},
    disabled: false,
  },
} satisfies Meta<typeof WSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "With label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
