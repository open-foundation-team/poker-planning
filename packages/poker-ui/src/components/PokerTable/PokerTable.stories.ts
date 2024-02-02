import type { Meta, StoryObj } from '@storybook/react';

import { PokerTable } from '.';

const meta = {
  title: 'Primary UI/PokerTable',
  component: PokerTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof PokerTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isRevealed: false,
    players: [
      {
        name: 'Christian',
        value: 3
      },
      {
        name: 'Pedro',
        value: 3
      },
      {
        name: 'Justo',
        value: 2
      },
      {
        name: 'David G.',
        value: 4
      },
      {
        name: 'Mr. Nustik',
        value: 2
      },
      {
        name: 'Antonio O.',
        value: 1
      },
      {
        name: 'Nono',
        value: 5
      },
      {
        name: 'M. Chico',
        value: 2
      }
    ],
  }
};
