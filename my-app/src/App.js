import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet></Greet>   
      <Greet name="jhon" ask="How are you..?"><p>This is child props</p></Greet>
      <Greet name="Sana" ask="Whatsup...??"><button>click</button></Greet>
      <Greet name="William"><img src='#' alt='image missing'></img></Greet>
      <Welcome name="jhon" ask="How are you..?"><p>This is child props</p></Welcome>
      <Welcome name="Sana" ask="Whatsup...??"><button>click</button></Welcome>
      <Welcome name="William"><img src='#' alt='image missing'></img></Welcome>
      
    </div>
  );
}

export default App;
