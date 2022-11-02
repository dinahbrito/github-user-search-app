export default function ProfileCard(props) {
    const userInput = props.userInput;
    
  return (
    <div className="card">
      <img src={userInput.avatar_url} alt="user profile pic" />
      <div className="profile-text">
        <h3>{userInput.login}</h3>
        <a href="#">@{userInput.login}</a>
        <p>{userInput.created_at}</p>
      </div>
    </div>
  );
}
