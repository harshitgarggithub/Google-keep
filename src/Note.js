import React from 'react';

const Note = ({title , content}) => {
    // const deleteItems = ()=>{

    // }
  return (
    <>
    <div className="note">
     {/* <i className="far fa-times-circle" onClick={()=>{props.onSelect(props.id)}}/> */}
    
       <h1>{title}</h1>
       <p>{content}</p>
       {/* <button onClick={deleteItems}>-</button> */}
        {/* <h1>hello</h1>
       <p>this is para</p>  */}
    </div>   
    </>
   
  );
}

export default Note;
