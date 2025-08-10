import type { Meta, StoryObj } from "@storybook/react";
import { WImage } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";

const meta = {
  title: "WImage",
  component: WImage,
  decorators: DefaultStoriesDecorator,
  args: {
    source: {
      uri: "https://via.placeholder.com/150",
    },
  },
} satisfies Meta<typeof WImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
