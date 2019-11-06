import React from 'react';

const Members = props => {
  return (
    <div className="note-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;
