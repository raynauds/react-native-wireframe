import type { Meta, StoryObj } from "@storybook/react";
import { DefaultStoriesDecorator } from "../_internal/DefaultStoriesDecorator";
import { WTextInput } from "./WTextInput";

const meta = {
  title: "WTextInput",
  component: WTextInput,
  decorators: DefaultStoriesDecorator,
  args: {
    placeholder: "Placeholder",
    label: "Label",
    iconLeft: false,
    iconRight: false,
    onChangeText: () => alert("Text changed!"),
  },
} satisfies Meta<typeof WTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
