import React, { useState } from 'react';

const AddTimeZone = ({ onAdd }) => {
  const [newTimeZone, setNewTimeZone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTimeZone) {
      onAdd(newTimeZone);
      setNewTimeZone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Time Zone"
        value={newTimeZone}
        onChange={(e) => setNewTimeZone(e.target.value)}
      />
      <button type="submit">Add Time Zone</button>
    </form>
  );
};

export default AddTimeZone;
