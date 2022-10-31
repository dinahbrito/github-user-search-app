import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('')
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleClick = () => {
        console.log(searchInput)
    }

  return (
    <div>
        <input type="text" placeholder="search" value={searchInput} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
    </div>
  )
}