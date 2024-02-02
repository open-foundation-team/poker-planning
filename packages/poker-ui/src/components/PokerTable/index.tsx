/* eslint-disable react-hooks/exhaustive-deps */
// Component imports
import { useEffect, useState } from 'react';
import { Button, PokerCard } from '..';

// Style imports
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

// Seating area interface
interface SeatingAreaType {
  top: React.ReactElement[];
  bottom: React.ReactElement[];
  left: React.ReactElement[];
  right: React.ReactElement[];
}


export const PokerTable = ({
  players
}: PokerTableProps) => {

  // Player seating state
  const [seating, setSeating] = useState<SeatingAreaType>({
    top: [],
    bottom: [],
    left: [],
    right: [],
  });

  // Function to set player positions
  const seatPlayers = (playerArray: Player[]) => {

    // Reset seats
    const newSeating: SeatingAreaType = { top: [], bottom: [], left: [], right: [] };

    // Assign player seats
    playerArray.forEach((player, idx) => {
      if (newSeating.bottom.length <= newSeating.top.length && newSeating.bottom.length < 3) return newSeating.bottom.push(
        <PokerCard
          name={player.name}
          value={player.value}
          isFlipped
          key={idx}
        />
      );
      if (newSeating.top.length === newSeating.bottom.length - 1 && newSeating.top.length < 3) return newSeating.top.push(
        <PokerCard
          name={player.name}
          value={player.value}
          isFlipped
          key={idx}
        />
      );
      if (newSeating.left.length <= newSeating.right.length && newSeating.top.length >= 3) return newSeating.left.push(
        <PokerCard
          name={player.name}
          value={player.value}
          isFlipped
          key={idx}
        />
      );
      if (newSeating.right.length <= newSeating.left.length && newSeating.bottom.length >= 3) return newSeating.right.push(
        <PokerCard
          name={player.name}
          value={player.value}
          isFlipped
          key={idx}
        />
      );
    });

    // Update seating state
    setSeating(newSeating);
  };


  // Update player seating on load
  useEffect(() => {
    seatPlayers(players);
  }, [players]);

  // Calculate points
  const totalPoints = players.reduce((sum: number, player: Player) => {
    return sum + (player.value || 0);
  }, 0);

  // Generate table message
  const tableMessage = totalPoints > 0 ? null : 'Pick your cards!';

  return (
    <div className={["pokertable-styled"].join(' ')}>
      <div className="seating-left">
        {seating.left}
      </div>
      <div className="seating-top">
        {seating.top}
      </div>
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
      <div className="seating-right">
        {seating.right}
      </div>
      <div className="seating-bottom">
        {seating.bottom}
      </div>
    </div>
  );
};
