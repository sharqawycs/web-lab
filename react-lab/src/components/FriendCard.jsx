// FriendCard Component - Receives PROPS from parent
// This demonstrates component reusability with different data
function FriendCard({ name }) {
  return (
    <div className="friend-card">
      <div className="friend-info">
        <h4>{name}</h4>

        {console.log(name)}
      </div>
      <button className="add-friend-btn">Add Friend</button>
    </div>
  );
}

export default FriendCard;
