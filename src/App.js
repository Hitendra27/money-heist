import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';

function App() {
  return (
    <div className="container">
      <Header />
      <CharacterGrid />
    </div>
  );
}

export default App;
