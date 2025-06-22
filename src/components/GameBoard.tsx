import React from 'react';
import { GameCard, Difficulty } from '../types/game';
import MemoryCard from './MemoryCard';

interface GameBoardProps {
  cards: GameCard[];
  flippedCards: number[];
  matchedCards: number[];
  onCardClick: (index: number) => void;
  difficulty: Difficulty;
}

const GameBoard = ({ cards, flippedCards, matchedCards, onCardClick, difficulty }: GameBoardProps) => {
  const getGridClasses = () => {
    switch (difficulty) {
      case 'easy':
        return 'grid-cols-4 max-w-2xl';
      case 'medium':
        return 'grid-cols-4 max-w-xl';
      case 'hard':
        return 'grid-cols-6 max-w-2xl';
      default:
        return 'grid-cols-4 max-w-xl';
    }
  };

  return (
    <div className={`grid gap-5 mx-auto ${getGridClasses()}`}>
      {cards.map((card, index) => (
        <MemoryCard
          key={index}
          card={card}
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
          isMatched={matchedCards.includes(index)}
          onClick={() => onCardClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;