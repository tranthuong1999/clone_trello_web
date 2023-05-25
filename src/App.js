import logo from './logo.svg';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import BoardContent from './components/BoardContent/BoardContent';
import BoardBar from './components/BoardBar/BoardBar';

function App() {
  return (
    <div className="trello-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
