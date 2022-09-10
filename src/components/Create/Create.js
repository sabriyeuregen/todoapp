import "./Create.css";
import { useState,useRef } from "react";

import axios from "axios";

const Create = () => {
   
    const [isCompleted, setIsCompleted] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');
    const [contentInput, setContentInput] = useState(true)
    const contentInputRef=useRef();
    

    const postData = () => {

        const enteredInput = contentInputRef.current.value;

        if ( enteredInput.trim().length === 0 || enteredInput.length < 3  ) 
        {
            setContentInput(false);
            return;
          }
        if(enteredInput.trim().length > 3){

            axios.post(`https://63187ed2ece2736550cb894c.mockapi.io/todos`, {
                id,
                isCompleted,
                content
            })
          }
    }

    

    return(
       <form className="create">
        <label>Id</label>
      <input placeholder="id" onChange={(e) => setId(e.target.value)}></input>
      <label>isCompleted</label>
      <input placeholder="iscompleted" onChange={(e) => setIsCompleted(e.target.value)}></input>
      <label>content</label>
      <input placeholder="content" type= "text"  minLength={3}  ref={contentInputRef} onChange={(e) => setContent(e.target.value)}></input>
      <button className="create-button" onClick={postData} type="submit">Create</button>
      {!contentInput && <p>Please enter a valid input (min 3 length)</p>}
       </form>
    
    )
}
export default Create;