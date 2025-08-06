import type { Meta, StoryObj } from '@storybook/react';
import { WTextInput } from './WTextInput';
import { View } from 'react-native';

const meta = {
  title: 'Components/WTextInput',
  component: WTextInput,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof WTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const IconLeft: Story = {
  args: {
    iconLeft: true,
    placeholder: 'Icon left',
  },
};

export const IconRight: Story = {
  args: {
    iconRight: true,
    placeholder: 'Icon right',
  },
};

export const IconLeftAndRight: Story = {
  args: {
    iconLeft: true,
    iconRight: true,
    placeholder: 'Icon left and right',
  },
};