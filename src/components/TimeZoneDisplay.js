import React from 'react';
import moment from 'moment-timezone';

const TimeZoneDisplay = ({ timeZone, currentTime, onDelete }) => {
  const time = currentTime.tz(timeZone).format('MMMM Do YYYY, h:mm:ss a');
  
  return (
    <div>
      <p>{timeZone}: {time}</p>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
};

export default TimeZoneDisplay;
