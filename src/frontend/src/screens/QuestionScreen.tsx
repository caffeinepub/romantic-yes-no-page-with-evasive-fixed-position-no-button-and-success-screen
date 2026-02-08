import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useEvasiveFixedPosition } from '@/hooks/useEvasiveFixedPosition';

interface QuestionScreenProps {
  onYes: () => void;
}

export default function QuestionScreen({ onYes }: QuestionScreenProps) {
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const { position, reposition } = useEvasiveFixedPosition(noButtonRef);

  const handleNoHover = () => {
    reposition();
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    reposition();
  };

  const handleNoTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    reposition();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main content container */}
      <div className="text-center z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-romantic-dark leading-tight px-4">
          Cia will you be mine forever or will stay for lifetime? ❤️
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
          <Button
            onClick={onYes}
            size="lg"
            className="yes-button text-xl px-12 py-8 rounded-3xl font-semibold shadow-romantic hover:shadow-romantic-lg transition-all duration-300 hover:scale-105"
          >
            Yes 💖
          </Button>
        </div>
      </div>

      {/* Evasive No button - positioned fixed */}
      <Button
        ref={noButtonRef}
        onMouseEnter={handleNoHover}
        onClick={handleNoClick}
        onTouchStart={handleNoTouch}
        size="lg"
        variant="outline"
        className="no-button fixed text-xl px-12 py-8 rounded-3xl font-semibold shadow-romantic transition-all duration-150 hover:scale-105 z-20"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        No 💔
      </Button>
    </div>
  );
}
