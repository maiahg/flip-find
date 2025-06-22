import React from 'react';
import { Card } from '@/components/ui/card';
import { GameCard } from '../types/game';

interface MemoryCardProps {
  card: GameCard;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const MemoryCard = ({ card, isFlipped, isMatched, onClick }: MemoryCardProps) => {
  return (
    <Card 
      className={`
        relative aspect-square cursor-pointer transition-all duration-300 transform hover:scale-105 border-0
        ${isMatched ? 'ring-4 ring-green-600' : 'hover:shadow-lg'}
        ${isFlipped ? 'bg-white' : 'bg-sandstorm'}
      `}
      onClick={onClick}
    >
      <div className={`
        w-full h-full relative transition-transform duration-500 transform-style-3d
        ${isFlipped ? 'rotate-y-180' : ''}
      `}>
        <div className={`
          absolute inset-0 w-full h-full flex items-center justify-center
          backface-hidden
          text-3xl md:text-5xl
          ${isFlipped ? 'rotate-y-180' : ''}
        `}>
          ?
        </div>
        
        <div className={`
          absolute inset-0 w-full h-full flex items-center justify-center
          bg-white rotate-y-180 backface-hidden text-3xl md:text-5xl
          ${isFlipped ? '' : 'rotate-y-180'}
        `}>
          {card.emoji}
        </div>
      </div>
    </Card>
  );
};

export default MemoryCard;