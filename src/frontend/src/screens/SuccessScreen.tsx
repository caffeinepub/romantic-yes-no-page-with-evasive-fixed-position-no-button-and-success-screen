import { useEffect, useState } from 'react';

export default function SuccessScreen() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate floating hearts
    const heartArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setHearts(heartArray);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="floating-heart absolute text-4xl opacity-0"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Success content */}
      <div className="text-center z-10 max-w-3xl mx-auto animate-fade-in">
        <div className="mb-8">
          <div className="text-8xl mb-6 animate-heart-beat">💕</div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-romantic-dark leading-tight px-4">
          Yay! Babe I just knew that u always be mine only ❣️ 💕
        </h1>

        <p className="text-2xl md:text-3xl text-romantic-medium font-semibold px-4">
          Love u sayang ❤️❤️
        </p>
      </div>
    </div>
  );
}
