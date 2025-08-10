import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { WSlider } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WSlider",
  component: WSlider,
  decorators: DefaultStoriesDecorator,
  args: {
    value: 50,
    minimumValue: 0,
    maximumValue: 100,
    step: 1,
    onValueChange: fn(),
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof WSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
