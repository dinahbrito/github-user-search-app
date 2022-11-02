import { useEffect } from "react";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

export default function Search() {
  const [userInput, setUserInput] = useState("octocat");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((result) => result.json())
      .then((data) => console.log(data));
    search();
  }, []);

  const search = async () => {
    const res = await fetch(`https://api.github.com/users/${userInput}`);
    const data = await res.json();
    setUserInput(data);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              search();
            }
          }}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={search}>search</button>
      </div>

      <ProfileCard userInput={userInput} />
    </>
  );
}
