import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { WCheckbox } from "./WCheckbox";

const meta = {
  title: "Components/WCheckbox",
  component: WCheckbox,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    value: false,
    onChange: () => {},
  },
} satisfies Meta<typeof WCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    value: true,
  },
};

export const WithLabel: Story = {
  args: { label: "With label" },
};
