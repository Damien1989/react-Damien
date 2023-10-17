import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Bienvenue sur mon site web"
  const person = {
    name:"Damien",
    age: 34,
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <p>{person.name} - {person.age} ans</p>
      </header>
    </div>
  );
}

export default App;
