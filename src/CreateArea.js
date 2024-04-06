import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    // event.preventDefault();
    const { name, value } = e.target;
    setNote((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
   // console.log(note);
  }

  const addEvent = (event) => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="title" name="title" value={note.title} onChange={handleChange} autoComplete='off' />
        <p>
          <textarea name="content" placeholder="Take a Note..." value={note.content} onChange={handleChange}></textarea>
        </p>
        <button onClick={addEvent}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
