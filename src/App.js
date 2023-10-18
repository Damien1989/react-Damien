import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const title = "Bienvenue sur mon site web"
  const person = {
    name:"Damien",
    age: 34,
  }
  return (
    <Header />
  );
}

export default App;
