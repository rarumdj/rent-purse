import AppRouter from 'routes/AppRouter';
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.style.scrollBehavior = 'auto';
      window.scroll({ top: 0 });
      htmlElement.style.scrollBehavior = '';
    }
  }, [location.pathname]); // triggered on route change

  return <AppRouter />;
}

export default App;
