import { useState } from 'react';
import QuestionScreen from './screens/QuestionScreen';
import SuccessScreen from './screens/SuccessScreen';

export default function App() {
  const [screen, setScreen] = useState<'question' | 'success'>('question');

  return (
    <div className="min-h-screen">
      {screen === 'question' && <QuestionScreen onYes={() => setScreen('success')} />}
      {screen === 'success' && <SuccessScreen />}
    </div>
  );
}
