import { useState } from "react";

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
      <form >
        <label>Kullanıcı adı ekleyiniz</label>
        <input type="text"  value={userInput} onChange={(event) => setUserInput(event.target.value)}></input>
        <button type="submit" onClick={handleClick}>Kullanıcı Ekle</button>
        <button onClick={handleRemoveStorage}>Temizle</button>
       
         <label>Kullanıcı Adı: {getItem}</label>
      </form>
    )
}
export default UserForm;