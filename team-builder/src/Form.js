import React, { useState } from "react";

const TeamMemberForm = props => {
  // console.log("this is our props", props);
  const [member, setMember] = useState({
    title: "",
    body: ""
  });

  const handleChanges = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
    // console.log(note);
  };

  const submitHandler = event => {
    event.preventDefault();
    const newNote = {
      ...note,
      id: Date.now()
    };
    props.addNewNote(newNote);
    console.log(newNote);
    // console.log(event.target.title);
    setNote({ title: "", body: "" });

    // this is done better in the value={note.key} in the input tags
    // event.target.title.value = "";
    // event.target.body.value = "";
  };

  return (
    // form tags have an associated state with all the data
    // from tags inside of that form tag
    <div>
      <form onSubmit={submitHandler}>
        <h1>{note.title}</h1>
        <label htmlFor="title">Note Title</label>
        <input
          onChange={handleChanges}
          id="title"
          type="text"
          name="title"
          value={note.title}
        />

        <label htmlFor="body">Note Body</label>
        <textarea
          onChange={handleChanges}
          id="body"
          type="text"
          name="body"
          value={note.body}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NoteForm;
