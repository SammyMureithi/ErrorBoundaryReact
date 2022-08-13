import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Hero heroName="Mure" />
      </ErrorBoundary>
     
      <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
