import type { Meta, StoryObj } from "@storybook/react";
import { WPicker } from "react-native-wireframe";
import { DefaultStoriesDecorator } from "./_internal/DefaultStoriesDecorator";
import { useState } from "react";

const meta = {
  title: "WPicker",
  component: WPicker,
  decorators: DefaultStoriesDecorator,
  args: {
    items: [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
    ],
  },
} satisfies Meta<typeof WPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const WPickerWrapper = (props: React.ComponentProps<typeof WPicker>) => {
  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <WPicker
      {...props}
      selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}
    />
  );
};

export const Default: Story = {
  render: (props) => <WPickerWrapper {...props} />,
};
