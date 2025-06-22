import { RotateCcw, Home } from "lucide-react";

interface GameStatsProps {
  moves: number;
  matches: number;
  totalPairs: number;
  onRestart: () => void;
  onReturnHome: () => void;
}

export const GameStats = ({
  moves,
  matches,
  totalPairs,
  onRestart,
  onReturnHome,
}: GameStatsProps) => {

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xl">
      <div className="flex flex-col gap-5">
          <div className="flex justify-evenly gap-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">{moves}</div>
              <div className="text-gray-700 font-semibold">Moves</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">
                {matches}/{totalPairs}
              </div>
              <div className="text-gray-700 font-semibold">Pairs Found</div>
            </div>
        </div>
        
        <div className="flex justify-center gap-12">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 font-semibold rounded-2xl transition-all duration-200 hover:scale-105 border-black"
          >
            <RotateCcw size={20} />
            Restart
          </button>

          <button
            onClick={onReturnHome}
            className="flex items-center gap-2 px-6 py-3 bg-sunrise-orange text-white font-semibold rounded-2xl transition-all duration-200 hover:scale-105"
          >
            <Home size={20} />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};
