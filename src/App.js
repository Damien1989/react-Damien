import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

const user = {
  name: 'Hedy Lamar',
  imageUrl: 'https://images.unsplash.com/photo-1690233339266-7b1f831796d8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageSize: 500,
};


function App() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={user.name} width = {user.imageSize}/>
    <Header text ="yooo"/>
    <Header text = "super cool"/>
    <Footer text= "my footer" />
    <h1>Bienvenue</h1>
    <Button />
    <Button />
    </div>
  );
}

export default App;
