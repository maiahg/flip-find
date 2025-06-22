import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Home, Play } from "lucide-react";

interface WinModalProps {
  isOpen: boolean;
  moves: number;
  onPlayAgain: () => void;
  onReturnHome: () => void;
}

export const WinModal = ({
  isOpen,
  moves,
  onPlayAgain,
  onReturnHome,
}: WinModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onPlayAgain}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader className="mb-4 p-3 rounded-t-lg">
          <DialogTitle className="text-center text-3xl font-bold text-black">
            🎉 Congratulations! 🎉
          </DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-4">
          <div className="text-6xl animate-bounce">🏆</div>
          <div className="space-y-2">
            <p className="text-xl text-gray-800 font-semibold">
              You found all the pairs!
            </p>
            <p className="text-2xl font-bold text-orange-600">{moves} moves</p>
            <p className="text-md text-emerald-600 font-medium">
              {moves <= 12
                ? "Rock Star! 🌟"
                : moves <= 18
                ? "Great job! 👏"
                : "Well done! 🎯"}
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              onClick={onPlayAgain}
              className="flex-1 text-black bg-white border border-black font-bold hover:scale-105 hover:bg-white"
            >
              <Play size={20} />
              Play Again
            </Button>
            <Button
              onClick={onReturnHome}
              className="flex-1 bg-sunrise-orange text-white font-bold hover:bg-sunrise-orange hover:scale-105"
            >
              <Home size={20} />
              Return Home
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
