import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note = (props) => {
  
  return (
    <>
    <div className="note">
     {/* <i className="far fa-times-circle" onClick={(id)=>{props.onSelect(props.id)}}/> */}
    
       <h1>{props.title}</h1>
       <p>{props.content}</p>
      <button className='btn' onClick={(id)=>{props.onSelect(props.id)}}>
      <DeleteOutlineIcon className="deleteIcon"/>
      </button>
        {/* <h1>hello</h1>
       <p>this is para</p>  */}
    </div>   
    </>
   
  );
}

export default Note;
