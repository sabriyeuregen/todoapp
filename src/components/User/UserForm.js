import { useState } from "react";
import  "./UserForm.css";

const UserForm = () => {

   const [ userInput,setUserInput ] = useState("");

  const handleClick = () => {
   
    localStorage.setItem('UserInput', JSON.stringify(userInput));
  }

  const getItem =localStorage.getItem('UserInput')
  
  const handleRemoveStorage =()=>{

    localStorage.clear();
  }
    //kullanıcı adı localstorage e eklenmeli ve sayfada göster
    //todolar üzerinde crud işlemleri yapılmalı(api üzerinden )
    return(
      <form className="form">
        <label className="form-label">Add UserName </label>
        <input className="form-input" type="text"  value={userInput} onChange={(event) => setUserInput(event.target.value)}></input>
        <div className="form-button">
        <button className="form-button__add" type="submit" onClick={handleClick}>Add User</button>
        <button className="form-button__clear" onClick={handleRemoveStorage}>Clear the localStorage</button>
        </div>
         <label className="form-userName">User Name: {getItem}</label>
      </form>
    )
}
export default UserForm;