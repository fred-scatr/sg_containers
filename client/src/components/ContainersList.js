// src/components/ContainersList.js
import React, { useEffect, useState } from 'react';
import './ContainersList.css';

function ContainersList() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/containers')
      .then(res => res.json())
      .then(data => setContainers(data))
      .catch(err => console.error('Error fetching containers:', err));
  }, []);

  return (
    <div className="containers-list">
      <h2>Containers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Shape</th>
            <th>Dimensions</th>
            <th>Max Capacity (kg)</th>
            <th>Manufactured</th>
            <th>Other Specs</th>
          </tr>
        </thead>
        <tbody>
          {containers.map(container => (
            <tr key={container.container_id}>
              <td>{container.container_id}</td>
              <td>{container.type}</td>
              <td>{container.shape}</td>
              <td>{container.dimensions}</td>
              <td>{parseFloat(container.max_capacity).toFixed(1)}</td>
              <td>{new Date(container.manufacture_date).toLocaleDateString()}</td>
              <td>{container.other_specs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContainersList;
