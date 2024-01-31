import type { Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Deck } from '.';

export default {
  title: 'Primary UI/Deck',
  component: Deck,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    deckValues: [1, 2, 3, 4, 5, 8, 11],
  }
} satisfies Meta<typeof Deck>;


export const Primary = ({ ...args }) => {
  const [{ selectedValue }, updateArgs] = useArgs();
  const updateSelectedValue = (id: number) => updateArgs({ selectedValue: id });

  return (
    <Deck
      selectedValue={selectedValue}
      updateSelectedValue={updateSelectedValue}
      {...args}
    />
  );
};
