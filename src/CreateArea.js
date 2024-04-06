import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateArea(props) {
  const [expand, setExpand] = useState(false);
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
  const expandIt = () => {
    setExpand(true);
  }
  const bctoNormal = () => {
    setExpand(false);
  }
  return (
    <div className='main_note' onDoubleClick={bctoNormal}>
      <form>
        {expand ?
          <input type="text" placeholder="title" name="title" value={note.title} onChange={handleChange} autoComplete='off' />
          : null}
        <textarea name="content" placeholder="Take a Note..." value={note.content} onChange={handleChange} onClick={expandIt}>
        </textarea>
        {expand ? (
          <Button onClick={addEvent}>
            <AddIcon className='plus_sign' />
          </Button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
