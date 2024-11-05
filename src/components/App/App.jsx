import './App.css';
import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transaction.json';

import Profile from '../01-ProfileFile/Profile.jsx';
import FriendList from '../02-FriendListFile/FriendList.jsx';
import TransactionHistory from '../03-TransactionHistoryFile/TransactionHistory.jsx';

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

      {/* Friends List Section */}
      <div id="friends-section">
        <FriendList friends={friends} />
      </div>

      {/* Transaction History Section */}
      <div id="transaction-section">
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
