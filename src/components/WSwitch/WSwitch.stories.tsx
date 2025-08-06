import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { WSwitch } from "./WSwitch";

const meta = {
  title: "Components/WSwitch",
  component: WSwitch,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
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
