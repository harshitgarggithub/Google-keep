import React, { useState } from 'react';
import "./index.css";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from './Footer';
import Count from './Count';
const App = () => {
  let [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert('button is clicked');

    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(addItem);
  };

  const deleteItems = (id) =>{
    setAddItem((oldItems)=>{
      return oldItems.filter((currElem , ind)=>{
        return id!=ind;
      })
    })
  }
  return (
    <>

      <Header />
      <Count
        count={
          addItem.length === 0 ? "Empty":`Showing ${addItem.length} Notes in Database`
        }
      />
      <CreateArea passNote={addNote} />
       {addItem.map((val, index) => {
        return (
          <Note
            title={val.title}
            content={val.content}
            key={index}
            id={index}
            onSelect = {deleteItems}
          />
        );
      })}   
      <Footer/>
    </>
  );
}

export default App;