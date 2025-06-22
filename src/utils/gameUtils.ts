import { GameCard, Difficulty, Theme } from '../types/game';

const animalEmojis = ["🐱", "🐶", "🐸", "🦊", "🐻", "🐼", "🐨", "🦁", "🐰", "🐯", "🦒", "🐘"];
const natureEmojis = ["🌸", "🌺", "🌻", "🌷", "🌹", "🌿", "🍃", "🌲", "🌳", "🌴", "🌵", "🌾"];
const flagEmojis = ["🇨🇦", "🇻🇳", "🇨🇳", "🇺🇸", "🇦🇺", "🇯🇵", "🇰🇷", "🇳🇱", "🇬🇧", "🇫🇷", "🇮🇹", "🇫🇮"];

export const generateCards = (difficulty: Difficulty, theme: Theme): GameCard[] => {
  const numPairs = {
    easy: 6,   
    medium: 8,
    hard: 12  
  }[difficulty];

    const emojis = {
    animals: animalEmojis,
    nature: natureEmojis,
    flags: flagEmojis,
  }[theme];
  const selectedEmojis = emojis.slice(0, numPairs);
  
  const cards: GameCard[] = [];
  
  selectedEmojis.forEach((emojiData, index) => {
    cards.push({
      id: index * 2,
      pairId: index,
      emoji: emojiData,
    });
    cards.push({
      id: index * 2 + 1,
      pairId: index,
      emoji: emojiData,
    });
  });

  return shuffleArray(cards);
};

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
