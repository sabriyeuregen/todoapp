import "./Create.css";
import { useState } from "react";

import axios from "axios";

const Create = () => {
   
    const [isCompleted, setIsCompleted] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');
   
    const postData = () => {
     
        axios.post(`https://63187ed2ece2736550cb894c.mockapi.io/todos`, {
            id,
            isCompleted,
            content
        })
    }


    return(
       <form >
        <label>Id</label>
      <input placeholder="id" onChange={(e) => setId(e.target.value)}></input>
      <label>isCompleted</label>
      <input placeholder="iscompleted" onChange={(e) => setIsCompleted(e.target.value)}></input>
      <label>content</label>
      <input placeholder="content" onChange={(e) => setContent(e.target.value)}></input>
      <button onClick={postData} type="submit">Submit</button>
       </form>
    
    )
}
export default Create;