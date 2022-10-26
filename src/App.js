import './App.css';
import {Icon} from "./components/icon"

function App() {
  return (
    <main className="App">
      <header>
        <h1>devfinder</h1>
        <button className='theme-toggle'>Light 
        <Icon name='sun'/>
        </button>
      </header>

      <div className='search-bar'>
        <input type="search" placeholder="Search GitHub username.." />
        <button type="submit">Search</button>
      </div>

    <div>
      stuff
    </div>
    
    </main>
  );
}

export default App;
