import './App.css';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import Post from './components/Post';
import FriendCard from './components/FriendCard';
import { useState } from 'react';

/**
 * Main Facebook Component - Demonstrates STATE management
 * STATE is data that belongs to THIS component and can change over time
 */
function Facebook() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Regular data - doesn't change, can be passed as PROPS
  const user = {
    name: 'John Doe',
    bio: 'Software Developer | React Enthusiast | Coffee Lover ☕',
    profilePicture: 'https://i.pravatar.cc/150?img=12',
    coverPhoto: 'https://picsum.photos/800/300',
    friendsCount: 284,
  };

  // const posts = [
  //   {
  //     id: 1,
  //     author: 'John Doe',
  //     content: 'Just learned about React props and state! This is amazing! 🚀',
  //     timestamp: '2 hours ago',
  //     authorPicture: 'https://i.pravatar.cc/150?img=12',
  //   },
  //   {
  //     id: 2,
  //     author: 'John Doe',
  //     content: 'React makes it so much easier to organize code!',
  //     timestamp: '5 hours ago',
  //     authorPicture: 'https://i.pravatar.cc/150?img=12',
  //   },
  // ];

  const friends = [
    { id: 1, name: 'Sarah Johnson' },
    { id: 2, name: 'Mike Williams', mutualFriends: 8, profilePicture: 'https://i.pravatar.cc/150?img=13' },
    { id: 3, name: 'Emma Davis', mutualFriends: 15, profilePicture: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'James Brown', mutualFriends: 6, profilePicture: 'https://i.pravatar.cc/150?img=33' },
    { id: 1, name: 'Sarah Johnson', mutualFriends: 12, profilePicture: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'Mike Williams', mutualFriends: 8, profilePicture: 'https://i.pravatar.cc/150?img=13' },
    { id: 3, name: 'Emma Davis', mutualFriends: 15, profilePicture: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'James Brown', mutualFriends: 6, profilePicture: 'https://i.pravatar.cc/150?img=33' },
    { id: 1, name: 'Sarah Johnson', mutualFriends: 12, profilePicture: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'Mike Williams', mutualFriends: 8, profilePicture: 'https://i.pravatar.cc/150?img=13' },
    { id: 3, name: 'Emma Davis', mutualFriends: 15, profilePicture: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'James Brown', mutualFriends: 6, profilePicture: 'https://i.pravatar.cc/150?img=33' },
    { id: 1, name: 'Sarah Johnson', mutualFriends: 12, profilePicture: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, name: 'Mike Williams', mutualFriends: 8, profilePicture: 'https://i.pravatar.cc/150?img=13' },
    { id: 3, name: 'Emma Davis', mutualFriends: 15, profilePicture: 'https://i.pravatar.cc/150?img=9' },
    { id: 4, name: 'James Brown', mutualFriends: 6, profilePicture: 'https://i.pravatar.cc/150?img=33' },
  ];

  ///////////////////////////

  return (
    <div className="app">
      {/* Passing data as PROPS to Navbar component */}
      <Navbar userName={user.name} profilePicture={user.profilePicture} />

      <div className="main-content">
        {/* Passing data as PROPS to ProfileHeader component */}
        <ProfileHeader
          name={user.name}
          bio={user.bio}
          profilePicture={user.profilePicture}
          coverPhoto={user.coverPhoto}
          friendsCount={user.friendsCount}
        />

        <div className="content-grid">
          <div className="left-sidebar">
            <div className="friends-section">
              <h3>Friends</h3>
              {/* Mapping through friends array and passing PROPS to each FriendCard */}
              {friends.map(friend => (
                <FriendCard key={friend.id} name={friend.name} />
              ))}
            </div>
          </div>

          <div className="main-feed">
            <h3>Posts</h3>
            {/* Mapping through posts array and passing PROPS to each Post */}
            {/* {posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                timestamp={post.timestamp}
                authorPicture={post.authorPicture}
              />
            ))} */}

            <Post
              author="John Doe"
              content="Just learned about React props and state! This is amazing! 🚀"
              timestamp="2 hours ago"
              authorPicture="https://i.pravatar.cc/150?img=12"
              isLiked={isLiked}
              likes={likes}
              setIsLiked={setIsLiked}
              setLikes={setLikes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facebook;
