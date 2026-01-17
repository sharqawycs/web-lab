// Navbar Component - Receives PROPS from parent
function Navbar({ userName, profilePicture }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">facebook</h2>
        <input type="text" placeholder="Search Facebook" className="search-box" />
      </div>
      <div className="navbar-right">
        <img src={profilePicture} alt="Profile" className="navbar-profile-pic" />
        <span>{userName}</span>
      </div>
    </nav>
  );
}

export default Navbar;
