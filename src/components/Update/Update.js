import { useState,useEffect } from "react";
import axios from "axios";
import "./Update.css";

const Update =(props)=>{

  const [isCompleted, setIsCompleted] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState(null);


useEffect(() => {
        setId(localStorage.getItem('id'))
        setContent(localStorage.getItem('content'));
        setIsCompleted(localStorage.getItem('isCompleted'));
}, []);

     const updateAPIData = () => {
      axios.put(`https://63187ed2ece2736550cb894c.mockapi.io/todos/${id}`, {
           id,
           isCompleted,
           content
    })
  }


    return(

      <form className="update">
      <label>Id</label>
      <input placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
      <label>isCompleted</label>
      <input placeholder="iscompleted" value={isCompleted} onChange={(e) => setIsCompleted(e.target.value)}></input>
      <label>content</label>
      <input placeholder="content" value={content} onChange={(e) => setContent(e.target.value)}></input>
      <button className="update-button" onClick={updateAPIData}>Update</button>
       </form>
     
    )
}
export default Update;