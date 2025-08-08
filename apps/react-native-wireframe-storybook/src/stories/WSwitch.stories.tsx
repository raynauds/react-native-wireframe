import type { Meta, StoryObj } from "@storybook/react";
import { DefaultStoriesDecorator } from "../_internal/DefaultStoriesDecorator";
import { WSwitch } from "./WSwitch";

const meta = {
  title: "WSwitch",
  component: WSwitch,
  decorators: DefaultStoriesDecorator,
  args: {
    value: false,
    label: "Switch",
    onChange: () => alert("Switch changed!"),
    disabled: false,
  },
} satisfies Meta<typeof WSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
