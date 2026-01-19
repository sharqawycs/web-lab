// Post Component - Uses both PROPS and STATE
// PROPS: author, content, timestamp (data passed from parent)
// STATE: likes, isLiked (internal component data that changes)
function Post({ author, content, timestamp, authorPicture, isLiked, likes, setIsLiked, setLikes }) {
  // STATE - managed internally by this component

  const handleLike = () => {
    if (isLiked) {
      // likes--;
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={authorPicture} alt={author} className="post-author-pic" />
        <div>
          <h4>{author}</h4>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <button onClick={handleLike} className={isLiked ? 'liked' : ''}>
          👍 Like ({likes})
        </button>
        <button>💬 Comment</button>
        <button>↗️ Share</button>
      </div>
    </div>
  );
}

export default Post;
