import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/data2">Data 2</Link></li>
        <li><Link to="/data3">Data 3</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
