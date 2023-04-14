// Profile
import { UserProfile } from './UserProfile/UserProfile';
import user from './UserProfile/user.json';

// Statistic
import { UserStats } from './UserStats/UserStats';
import data from './UserStats/data.json';

// Friends
import { FriendList } from './UserFriends/FriendList';
import friends from './UserFriends/friends.json';

// Transactions
import { UserTransactions } from './UserTransactions/UserTransactions';
import transactions from './UserTransactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        backgroundColor: 'lightgray',
      }}
    >
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <UserStats title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <UserTransactions transactions={transactions} />
    </div>
  );
};
