import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  const style = {
    textDecoration: 'underline'
  }

  return (
    <div className="bigBox">
      <h1 onClick={props.click}>{props.username}</h1>
      <p style={style}>And shepherds we shall be,</p>
      <p>for thee my Lord, for thee</p>
    </div>
  );
}

export default UserOutput;
