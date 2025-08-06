import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/internal/test";
import { DefaultStoriesDecorator } from "../_internal/DefaultStoriesDecorator";
import { WRadioGroup } from "./WRadioGroup";

const meta = {
  title: "WRadioGroup",
  component: WRadioGroup,
  decorators: DefaultStoriesDecorator,
  args: {
    value: "1",
    options: [
      { label: "option 1", value: "1" },
      { label: "option 2", value: "2" },
      { label: "option 3", value: "3" },
    ],
    onChange: fn(),
  },
} satisfies Meta<typeof WRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
