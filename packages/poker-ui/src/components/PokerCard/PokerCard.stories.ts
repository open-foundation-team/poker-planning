import type { Meta, StoryObj } from '@storybook/react';

import { PokerCard } from '.';

const meta = {
  title: 'Primary UI/PokerCard',
  component: PokerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof PokerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: 4,
    isFlipped: false,
    isActive: false,
    isHoverable: true
  },
};
