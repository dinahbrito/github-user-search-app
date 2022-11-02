import { useEffect } from "react";
import { useState } from "react";

export default function Search() {
  const [userInput, setUserInput] = useState("octocat");
  const [items, getItems] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(result => result.json())
      .then(data => console.log(data))
      search()
  }, []);

  // async function search(){
  //   console.log("search for " + userInput);

  //   let userID = await fetch(`https://api.github.com/users/${userInput}`)
  //   .then(response => response.json())
  //   .then(data => {return data})
  //   console.log("github user is: " + data.userID.login);

  // }

 const search = async () => {
  const res = await fetch(`https://api.github.com/users/${userInput}`)
  const data = await res.json()
  setUserInput(data)
 }

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
        <button
          onClick={search}
        >
          search
        </button>
      </div>

      <div className="card">
        <img src={userInput.url} alt="user profile pic" />
        <div className="profile-text">
          <h3>{userInput.login}</h3>
          <a href="#">@{userInput.login}</a>
          <p>{userInput.created_at}</p>
        </div>
      </div>
    </>
  );
}
