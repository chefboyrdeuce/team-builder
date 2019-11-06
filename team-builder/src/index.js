import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Form from 'Form';


function App() {
    const [ members, setMembers ] = useState([
        {
        id: 1,
        name: "Jules Louis",
        role: "Product Manager",
        email: "me@julesdev.pro"
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


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
