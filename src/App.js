import React, { useState } from 'react';
import "./index.css";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";

const App = () => {
  let [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert('button is clicked');

    setAddItem = ((prevData) => {
      return [...prevData, note];
    });
    console.log(addItem);
  };
  return (
    <>

      <Header />
      <CreateArea passNote={addNote} />
      <div>
       {addItem.map((val, index) => {
        return (
          <Note
            title={val.title}
            content={val.content}
            key={index}
            id={index}
          />
        );
      })}    
      </div>
     
      {/* <Note/> */}
    </>
  );
}

export default App;