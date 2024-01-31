// Component imports
import { PokerCard } from '..';

// Style imports
import './styles.scss';

// Deck interface declaration
interface DeckProps {
  deckValues: number[];
  selectedValue?: number;
  updateSelectedValue: (id: number) => void;
}


export const Deck = ({
  deckValues,
  selectedValue,
  updateSelectedValue
}: DeckProps) => {

  return (
    <div className={["deck-styled"].join(' ')}>
      {deckValues.map((value, idx) => (
        <PokerCard
          value={value}
          isActive={idx === selectedValue}
          isHoverable
          onClick={() => updateSelectedValue(idx)}
          key={idx}
        />
      ))}
    </div>
  );
};
