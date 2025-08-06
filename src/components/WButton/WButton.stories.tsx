import type { Meta, StoryObj } from '@storybook/react';
import { WButton } from './WButton';
import { View } from 'react-native';

const meta = {
  title: 'Components/WButton',
  component: WButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, gap: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof WButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    title: 'Filled',
    variant: 'filled',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    title: 'Text',
    variant: 'text',
  },
};