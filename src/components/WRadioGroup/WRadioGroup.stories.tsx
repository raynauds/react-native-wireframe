import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { WRadioGroup } from "./WRadioGroup";

const meta = {
  title: "Components/WRadioGroup",
  component: WRadioGroup,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    value: "1",
    options: [
      { label: "option 1", value: "1" },
      { label: "option 2", value: "2" },
      { label: "option 3", value: "3" },
    ],
    onChange: () => {},
  },
} satisfies Meta<typeof WRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
