import React from 'react';
import { Button } from '@/components/ui/button';
import { Theme } from '../types/game';

interface ThemeSelectorProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSelector = ({ theme, onThemeChange }: ThemeSelectorProps) => {
  const themes: { value: Theme; label: string; description: string; emoji: string }[] = [
    { value: 'animals', label: 'Animals', description: 'Cute animals emoji', emoji: '🐾' },
    { value: 'nature', label: 'Nature', description: 'Beautiful nature emoji', emoji: '🍁' },
    { value: 'flags', label: 'Flags', description: 'Flags of the world', emoji: '🇨🇦' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 text-center">Choose Theme</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {themes.map((themeOption) => (
          <Button
            key={themeOption.value}
            variant={theme === themeOption.value ? "default" : "outline"}
            className={`
              h-auto p-4 flex flex-col items-center space-y-2 transition-all duration-200 bg-white border
              ${theme === themeOption.value 
                ? 'bg-mustard text-white transform hover:scale-105 hover:bg-mustard' 
                : 'hover:scale-105 hover:bg-white border-black'
              }
            `}
            onClick={() => onThemeChange(themeOption.value)}
          >
            <span className="text-3xl">{themeOption.emoji}</span>
            <span className="text-lg font-semibold">{themeOption.label}</span>
            <span className="text-sm text-center">{themeOption.description}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;