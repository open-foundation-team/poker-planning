// Style imports
import './styles.scss';

// PokerCard interface declaration
interface PokerCardProps {
  value?: number;
  isFlipped?: boolean;
  isActive?: boolean;
  isHoverable?: boolean;
  onClick?: () => void;
}


export const PokerCard = ({
  value,
  isFlipped = false,
  isActive = false,
  isHoverable = false,
  onClick
}: PokerCardProps) => {

  const noValueClass = value ? null : 'no-value';
  const flippedClass = isFlipped ? 'flipped' : null;
  const activeClass = isActive ? 'active' : null;
  const hoverableClass = isHoverable ? 'hoverable' : null;

  return (
    <div
      className={["pokercard-styled", noValueClass, flippedClass, activeClass, hoverableClass].join(' ')}
      onClick={onClick}
    >
      <div className="card-front">
        {value}
      </div>
      <div className="card-back" />
    </div>
  );
};
