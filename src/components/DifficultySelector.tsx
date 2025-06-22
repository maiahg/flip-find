import React from 'react';
import { Button } from '@/components/ui/button';
import { Difficulty } from '../types/game';

interface DifficultySelectorProps {
  difficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

const DifficultySelector = ({ difficulty, onDifficultyChange }: DifficultySelectorProps) => {
  const difficulties: { value: Difficulty; label: string; description: string; cards: string }[] = [
    { value: 'easy', label: 'Easy', description: '3×4 Grid', cards: '12 cards - 6 pairs' },
    { value: 'medium', label: 'Medium', description: '4×4 Grid', cards: '16 cards - 8 pairs' },
    { value: 'hard', label: 'Hard', description: '4×6 Grid', cards: '24 cards - 12 pairs' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 text-center">Choose Difficulty</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {difficulties.map((diff) => (
          <Button
            key={diff.value}
            variant={difficulty === diff.value ? "default" : "outline"}
            className={`
              h-auto p-4 flex flex-col items-center space-y-2 transition-all duration-200
              ${difficulty === diff.value 
                ? 'bg-coral text-white transform hover:scale-105 hover:bg-coral'  
                : 'hover:scale-105'
              }
            `}
            onClick={() => onDifficultyChange(diff.value)}
          >
            <span className="text-lg font-semibold">{diff.label}</span>
            <span className="text-sm opacity-80">{diff.description}</span>
            <span className="text-xs opacity-70">{diff.cards}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;