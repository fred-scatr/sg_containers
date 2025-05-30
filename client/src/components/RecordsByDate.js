// src/components/RecordsByDate.js
import React, { useEffect, useState } from 'react';
import RecordsTableDate from './RenderRecordsTableDate';

function RecordsByDate() {
  const [containers, setContainers] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/containers')
      .then(res => res.json())
      .then(data => setContainers(data))
      .catch(err => console.error('Error fetching containers:', err));
  }, []);

  useEffect(() => {
    if (selectedId) {
      fetch(`http://localhost:3001/api/records?filter=date&containerId=${selectedId}`)
        .then(res => res.json())
        .then(data => setRecords(data))
        .catch(err => console.error('Error fetching records:', err));
    }
  }, [selectedId]);

  return (
    <div className="containers-list">
      <label htmlFor="container-select"><strong>Container:    </strong></label>
      <select
        id="container-select"
        value={selectedId}
        onChange={e => setSelectedId(e.target.value)}
      >
        <option value="">-- Select a container --</option>
        {containers.map(c => (
          <option key={c.container_id} value={c.container_id}>
            {c.container_id}
          </option>
        ))}
      </select>

      {records.length > 0 && <RecordsTableDate records={records} />}
    </div>
  );
}

export default RecordsByDate;
