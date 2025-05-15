import React, { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://54.236.88.92:3001/api/users') // ← replace this
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>
            {user.username} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
