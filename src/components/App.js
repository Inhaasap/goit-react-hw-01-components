// Profile
import { UserProfile } from './UserProfile/UserProfile';
import user from './UserProfile/user.json';

// Statistic
import { UserStats } from './UserStats/UserStats';
import data from './UserStats/data.json';

// Friends
// Transactions

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
    </div>
  );
};
