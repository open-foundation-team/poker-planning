// Style imports
import './styles.scss';

// PokerCard interface declaration
interface PokerCardProps {
  value?: number;
  isFlipped?: boolean;
  isActive?: boolean;
}


export const PokerCard = ({
  value,
  isFlipped = false,
  isActive = false
}: PokerCardProps) => {

  const noValueClass = value ? null : 'no-value';
  const flippedClass = isFlipped ? 'flipped' : null;
  const activeClass = isActive ? 'active' : null;

  return (
    <div className={["pokercard-styled", noValueClass, flippedClass, activeClass].join(' ')}>
      <div className="card-front">
        {value}
      </div>
      <div className="card-back" />
    </div>
  );
};
