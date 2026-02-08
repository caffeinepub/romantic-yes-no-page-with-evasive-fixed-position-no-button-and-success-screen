import { useState, useCallback, useEffect, RefObject } from 'react';

interface Position {
  top: number;
  left: number;
}

export function useEvasiveFixedPosition(buttonRef: RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const [previousPosition, setPreviousPosition] = useState<Position | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize position on mount and window resize
  const initializePosition = useCallback(() => {
    if (!buttonRef.current) return;

    const buttonWidth = buttonRef.current.offsetWidth || 200;
    const buttonHeight = buttonRef.current.offsetHeight || 60;
    
    const maxLeft = window.innerWidth - buttonWidth - 20;
    const maxTop = window.innerHeight - buttonHeight - 20;

    // Start in bottom right area
    const initialTop = Math.max(20, maxTop * 0.7);
    const initialLeft = Math.max(20, maxLeft * 0.7);

    setPosition({ top: initialTop, left: initialLeft });
    setIsInitialized(true);
  }, [buttonRef]);

  // Initialize on mount
  useEffect(() => {
    // Small delay to ensure button is rendered and measured
    const timer = setTimeout(initializePosition, 100);
    return () => clearTimeout(timer);
  }, [initializePosition]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (isInitialized) {
        initializePosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initializePosition, isInitialized]);

  const reposition = useCallback(() => {
    if (!buttonRef.current) return;

    const buttonWidth = buttonRef.current.offsetWidth || 200;
    const buttonHeight = buttonRef.current.offsetHeight || 60;
    
    const maxLeft = window.innerWidth - buttonWidth - 20;
    const maxTop = window.innerHeight - buttonHeight - 20;

    let newTop: number;
    let newLeft: number;
    let attempts = 0;
    const maxAttempts = 10;

    // Ensure new position is different from previous
    do {
      newTop = Math.max(20, Math.random() * maxTop);
      newLeft = Math.max(20, Math.random() * maxLeft);
      attempts++;

      // If we have a previous position, check if new position is sufficiently different
      if (previousPosition) {
        const distance = Math.sqrt(
          Math.pow(newTop - previousPosition.top, 2) + 
          Math.pow(newLeft - previousPosition.left, 2)
        );
        // Require at least 200px distance from previous position
        if (distance > 200 || attempts >= maxAttempts) {
          break;
        }
      } else {
        break;
      }
    } while (attempts < maxAttempts);

    const newPosition = { top: newTop, left: newLeft };
    setPreviousPosition(position);
    setPosition(newPosition);
  }, [buttonRef, position, previousPosition]);

  return { position, reposition };
}
