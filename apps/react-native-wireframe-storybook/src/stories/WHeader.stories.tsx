import type { Meta, StoryObj } from "@storybook/react";
import { WButton, WHeader } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WHeader",
  component: WHeader,
  decorators: DefaultStoriesDecorator,
  args: {
    title: "Header Title",
  },
} satisfies Meta<typeof WHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    actions: (
      <>
        <WButton variant="filled" title="Action 1" />
        <WButton variant="outlined" title="Action 2" />
      </>
    ),
  },
};
