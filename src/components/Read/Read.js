import { useState,useEffect} from "react";
import axios from "axios";

const Read =()=>{

    const [apiData, setApiData] = useState([]);

   
      const fetchData = async () => {

        const result =await axios(`https://63187ed2ece2736550cb894c.mockapi.io/todos`)
        .then(response=>response)
        console.log(result.data)
        setApiData(result.data)
       }
  
       useEffect(() => {
        fetchData();
      }, []);


  const setData = (data) => {
      
    let { id, isCompleted , content } =data;
    
          localStorage.setItem("id",id);
          localStorage.setItem('isCompleted', isCompleted);
          localStorage.setItem('content', content);
   }
  
   const getData = () => {
    axios.get(`https://63187ed2ece2736550cb894c.mockapi.io/todos`)
        .then((getData) => {
             setApiData(getData.data);
         })
}

 const onDelete = (id) => {
        axios.delete(`https://63187ed2ece2736550cb894c.mockapi.io/todos/${id}`)
     .then(() => {
        getData();
    })
}


    return(
    <div>
     {
          apiData.map((todo) => (
        <div>
        <div>{todo.id}</div>
        <div>{todo.content}</div>
        <div>{String(todo.isCompleted)}</div>
        <div><button onClick={() => setData(todo)}>Update</button></div>
        <div><button onClick={() => onDelete(todo.id)}>Delete</button></div>
        </div>
       ) )
     }
    </div>
    )
}
export default Read;