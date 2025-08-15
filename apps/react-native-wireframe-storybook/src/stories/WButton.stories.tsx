import type { Meta, StoryObj } from "@storybook/react";
import { WButton } from "react-native-wireframe";
import { fn } from "storybook/test";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WButton",
  component: WButton,
  decorators: DefaultStoriesDecorator,
  args: {
    title: "Button",
    variant: "filled",
    onPress: fn(),
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["filled", "outlined", "text"],
    },
  },
} satisfies Meta<typeof WButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
