import type { Meta, StoryObj } from "@storybook/react";
import { WDivider } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";
import { View } from "react-native";

const meta = {
  title: "WDivider",
  component: WDivider,
  decorators: DefaultStoriesDecorator,
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof WDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <View style={{ height: 100 }}>
        <Story />
      </View>
    ),
  ],
};
