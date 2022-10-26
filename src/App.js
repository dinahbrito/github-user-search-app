import './App.css';
import {Icon} from "./components/icon"

function App() {
  return (
    <main className="App">
      <header>
        <h1>devfinder</h1>
        <button>Light 
        <Icon name='twitter' width="25px" height="25px"/>
        </button>
      </header>

      <div>
        <input type="text" />
      </div>

    </main>
  );
}

export default App;
