import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/internal/test";
import { WCheckbox } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WCheckbox",
  component: WCheckbox,
  decorators: DefaultStoriesDecorator,
  args: {
    value: false,
    onChange: fn(),
    label: "Checkbox",
  },
} satisfies Meta<typeof WCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
