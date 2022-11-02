import "./App.css";
import { Icon } from "./components/icon";
import { useState, useEffect } from "react";
import Search from "./components/Search";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);


  return (
    <main className={`App ${theme}`}>
      <header>
        <h1>devfinder</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Light
          <Icon name="sun" />
        </button>
      </header>

      <Search />
    </main>
  );
}

export default App;
