// Style imports
import { Button } from '..';
import './styles.scss';

// Player interface
interface Player {
  name: string;
  value?: number;
}

// PokerTable interface declaration
interface PokerTableProps {
  players: Player[];
}


export const PokerTable = ({
  players
}: PokerTableProps) => {

  // Calculate points
  const totalPoints = players.reduce((sum: number, player: Player) => {
    return sum + (player.value || 0);
  }, 0);

  // Generate table message
  const tableMessage = totalPoints > 0 ? null : 'Pick your cards!';

  return (
    <div className={["pokertable-styled"].join(' ')}>
      <div className="seating-left"></div>
      <div className="seating-top"></div>
      <div className="table">
        {typeof tableMessage === 'string' ?
          tableMessage
          :
          <Button
            primary
          >
            Reveal Cards
          </Button>
        }
      </div>
      <div className="seating-right"></div>
      <div className="seating-bottom"></div>
    </div>
  );
};
