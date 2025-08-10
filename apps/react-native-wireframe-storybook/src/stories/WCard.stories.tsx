import type { Meta, StoryObj } from "@storybook/react";
import { WCard, WText } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WCard",
  component: WCard,
  decorators: DefaultStoriesDecorator,
  args: {
    children: <WText>This is a card</WText>,
  },
} satisfies Meta<typeof WCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
