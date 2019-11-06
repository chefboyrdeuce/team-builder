import React, { useState } from 'react';

const Form = props => {
  // console.log("this is our props", props);
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: ""
  });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
    // console.log(team);
  };

  const submitHandler = event => {
    event.preventDefault();
    const newMember= {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    console.log(newMember);
    // console.log(event.target.title);
    setMember({ name: "", role: "", email: "" });

    // this is done better in the value={note.key} in the input tags
    // event.target.title.value = "";
    // event.target.body.value = "";
  };

  return (
    // form tags have an associated state with all the data
    // from tags inside of that form tag
    <div>
      <form onSubmit={submitHandler}>
        <h1>{member.name}</h1>
        <label htmlFor="name">Member Name</label>
        <input
          onChange={handleChanges}
          id="name"
          type="text"
          name="name"
          value={member.name}
        />

        <label htmlFor="role">Member Role</label>
        <textarea
          onChange={handleChanges}
          id="role"
          type="text"
          name="role"
          value={member.role}
        />

        <label htmlFor="email">Member Email</label>
        <textarea
          onChange={handleChanges}
          id="email"
          type="text"
          name="email"
          value={member.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
