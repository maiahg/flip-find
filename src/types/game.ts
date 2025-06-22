export type Difficulty = 'easy' | 'medium' | 'hard';
export type Theme = 'animals' | 'nature' | 'flags';

export interface GameCard {
  id: number;
  pairId: number;
  emoji: string;
}