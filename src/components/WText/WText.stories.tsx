import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { WText } from "./WText";

const meta = {
  title: "Components/WText",
  component: WText,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof WText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header1: Story = {
  args: {
    variant: "h1",
    children: "Header 1 (h1)",
  },
};

export const Header2: Story = {
  args: {
    variant: "h2",
    children: "Header 2 (h2)",
  },
};

export const Header3: Story = {
  args: {
    variant: "h3",
    children: "Header 3 (h3)",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Body",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption",
  },
};
