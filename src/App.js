import logo from './logo.svg';
import './App.css';
import Composant1 from './cc1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Projet 1 :  <strong>Comptage</strong></h1>
        <Composant1/>
      </header>
    </div>
  );
}

export default App;
