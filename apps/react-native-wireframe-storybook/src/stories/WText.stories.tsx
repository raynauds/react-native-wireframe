import type { Meta, StoryObj } from "@storybook/react";
import { WText } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WText",
  component: WText,
  decorators: DefaultStoriesDecorator,
  args: {
    variant: "body",
    children: "Text",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["h1", "h2", "h3", "body", "caption"],
    },
  },
} satisfies Meta<typeof WText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
