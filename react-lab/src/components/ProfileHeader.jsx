// ProfileHeader Component - Receives PROPS from parent
function ProfileHeader({ name, bio, profilePicture, coverPhoto, friendsCount }) {
  return (
    <div className="profile-header">
      <div className="cover-photo">
        <img src={coverPhoto} alt="Cover" />
      </div>
      <div className="profile-info">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-details">
          <h1>{name}</h1>
          <p className="bio">{bio}</p>
          <p className="friends-count">{friendsCount} friends</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
