import './App.css'
import userData from '../../data/userData.json'

import Profile from '../01-ProfileFile/Profile.jsx'

const App = () => {
  return (
    <>
      {/* Profile Section */}
      <div id="profile-section">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
    </>
  );
};

export default App;
