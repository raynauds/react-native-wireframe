import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WListItem, WCheckbox, theme } from 'react-native-wireframe';
import { DefaultStoriesDecorator } from './_internal/DefaultStoriesDecorator';
import { View } from 'react-native';

const meta = {
  title: 'WListItem',
  component: WListItem,
  decorators: DefaultStoriesDecorator,
  args: {
    title: 'List Item',
  },
} satisfies Meta<typeof WListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: 'This is a description',
  },
};

export const WithCheckbox: Story = {
  args: {
    right: <WCheckbox value={true} onChange={() => {}} />,
  },
};

export const WithImage: Story = {
  args: {
    title: 'List Item with Image',
    description: 'This is a description',
    left: (
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: theme.colors.primary,
          borderRadius: 25,
        }}
      />
    ),
  },
};

export const Pressable: Story = {
  args: {
    title: 'Pressable List Item',
    description: 'This item can be pressed',
    onPress: () => alert('Pressed!'),
  },
};
