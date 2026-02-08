import { useEffect, useState } from 'react';
import QuestionScreen from './screens/QuestionScreen';
import SuccessScreen from './screens/SuccessScreen';
import { APP_CONFIG } from './config/appVariant';

type Route = '/' | '/success';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('/');

  // Initialize route from URL
  useEffect(() => {
    const path = window.location.pathname as Route;
    if (path === '/success') {
      setCurrentRoute('/success');
    } else {
      setCurrentRoute('/');
    }
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as Route;
      if (path === '/success') {
        setCurrentRoute('/success');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: Route) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
  };

  const handleYes = () => navigate('/success');

  return (
    <div className="min-h-screen">
      {currentRoute === '/' && (
        <QuestionScreen
          heading={APP_CONFIG.heading}
          onYes={handleYes}
        />
      )}
      {currentRoute === '/success' && <SuccessScreen />}
    </div>
  );
}
