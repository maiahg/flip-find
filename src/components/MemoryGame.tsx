"use client";

import React, { useState, useEffect } from "react";
import { GameCard, Difficulty, Theme } from "../types/game";
import { generateCards } from "../utils/gameUtils";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DifficultySelector from './DifficultySelector';
import ThemeSelector from './ThemeSelector';
import { Play, RotateCcw, Trophy } from 'lucide-react';
import GameBoard from "./GameBoard";


export default function MemoryGame() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [theme, setTheme] = useState<Theme>("animals");
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const initializeGame = () => {
    const newCards = generateCards(difficulty, theme);
    setCards(newCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameStarted(true);
    setGameComplete(false);
  };

  const handleCardClick = (index: number) => {
    if (
      !gameStarted ||
      gameComplete ||
      flippedCards.length >= 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);

      const [first, second] = newFlippedCards;
      if (cards[first].pairId === cards[second].pairId) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, first, second]);
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameComplete(false);
  };

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameComplete(true);
    }
  }, [matchedCards.length, cards.length]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-coral from-0% via-flamingo via-25% via-tangerine via-50% via-tiger-eye via-75% to-mustard to-100% p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl logo text-white mb-4 drop-shadow-lg">
            Flip & Find
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Test your memory by matching pairs of cards. <br /> Choose your difficulty
            and theme to get started!
          </p>
        </div>

        {!gameStarted ? (
          <Card className="max-w-2xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="space-y-6">
              <DifficultySelector
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
              />
              <ThemeSelector theme={theme} onThemeChange={setTheme} />

              <Button
                onClick={initializeGame}
                className="w-full py-4 text-lg font-semibold bg-sunrise-orange transform hover:bg-sunrise-orange hover:scale-105 transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Game
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            <GameBoard
              cards={cards}
              flippedCards={flippedCards}
              matchedCards={matchedCards}
              onCardClick={handleCardClick}
              difficulty={difficulty}
            />
          </div>
        )}
      </div>
    </div>
  );
}
