import React, { useEffect, useState } from 'react';
import './UsersList.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul className="users-list">
        {users.map(u => (
          <li key={u.user_id}>
            <span className="username">{u.username}</span>
            <span className="role">{u.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
