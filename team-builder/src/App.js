import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import Members from './Members';
import './index.css';
import Form from './Form';
import './App.css';

function App() {
  const [ members, setMembers ] = useState([
      {
      id: 1,
      name: "Bobby Boucher",
      role: "Water Distribution Engineer",
      email: "itsme@bobbyboucher.com"
      }
  ]);

  const addNewMember = member => {
      const newMember = setMembers([...members, member]);
      // make a new array that contains all the values of notes + newNote
      // ...notes === notes1, notes2, notes3
    };

  return (
      <div className="App">
        <h1>Team Members</h1>
        <Form addNewMember={addNewMember} />
        <Members members={members} />
      </div>
    );
}

export default App;
