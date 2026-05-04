import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundColor from './BackgroundColor';

const Home = () => {

const [inputVal,setInputVal] = useState('');

const [data,setData] = useState([])
// write a useState for the data to reload after adding new tasks
const [change,setChange] = useState({});

const [editId,setEditId] = useState(null);
// for the edit button
const [editBtnShow,setEditBtnShow] = useState(false);

useEffect(()=>{
  getData()
},[change])

// create a function for the button when whenc clicked to add the input task
const addClick = async()=>{


  try {
    
    if(inputVal == ""){  // always check if the  input value is empty or not
      alert("please add a task")
    } else{

      // create a object to store the input value
      let reqBody = {
        todoName : inputVal
      }
      // create a post response 
      let apiResponse = await axios.post("https://todobe-reactjs.onrender.com/todo",reqBody);
      // console.log(apiResponse);

      // notify the user if  task is added or not added

      if(apiResponse.status ===201){
        setChange(apiResponse);  // it used for the data to reload when the addclick is clciked
        setInputVal(""); // to remove the previous input value in the ui
        alert("successfully added")
      }else {
        alert("something went wrong")
      }
      
    }

  } catch (error) {
    console.log(error);
    alert("failed to add todo")
  }


  // getData();
}


// to  get the data from the server

const getData = async()=>{

  try {
    
let apiResponse = await axios.get(" https://todobe-reactjs.onrender.com/todo");
setData(apiResponse.data);
console.log(apiResponse.data)


  } catch (error) {
    console.log(error);
    alert("failed to get todo tasks")
  }




}

  const deleteClick = async(id)=>{
    try {
      
      let apiResponse = axios.delete(`https://todobe-reactjs.onrender.com/todo/${id}`);
      if(apiResponse.status == 200){
        alert("successfully deleted");
      }else{
        alert("Successfully deleted")
      }
     
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
      alert("something went wrong,cannot delete")
    }


    getData();
  }

const editTodo = async () =>{
  try {

  let reqBody = {
        todoName : inputVal
      }
    let apiResponse = await axios.put(`https://todobe-reactjs.onrender.com/todo/${editId}`,reqBody);
    if(apiResponse.status==200){
      setChange(apiResponse);
      setInputVal('');
      setEditId(null);
      setEditBtnShow(false);
      alert("successfully saved edited ")

    }else{
      alert("cannot save edit,something went wrong")
    }
    
  } catch (error) {
    console.log(error);
    alert("something went wrong,cannot edit")
  }

}


  return (
    <div className=''>
<div className='d-flex justify-content-center'>
    <h1 className='text-warning ' >Todo Tasks📒</h1>
</div>

        <div   className='inpCard container  mt-4 d-flex gap-5 p-3 justify-content-center'>
            <input onChange={(event)=> setInputVal(event.target.value)} className='taskInp' value={inputVal} type="text" />
            
            {
              editBtnShow? <button onClick={editTodo} className='btn btn-warning'>Edit</button> :<button onClick={addClick} className='btn btn-primary'>Add Task</button>
            }
        </div>


<div className='container tableCard mt-5'>
  <div className='taskTable'>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tasks</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
{ //always remeber to check if the data is empty array or not
data.length>0? <>  
{ // map the data and display it in the table using the map array method
  data.map(eachData =>(

     <tr>
      <td>{eachData.id}</td>
      <td>{eachData.todoName}</td>
      <td><button onClick={()=> {setInputVal(eachData.todoName),setEditBtnShow(true),setEditId(eachData.id)}} className='btn btn-warning'><i className="fa-solid fa-pen-to-square"></i></button> <button onClick={()=>deleteClick(eachData.id)}  className='btn btn-danger' ><i className="fa-solid fa-trash"></i></button></td>
    </tr>

  ))
}
</> : <tr>
      <th ></th>
      <th >no data found</th>
      <th ></th>

    </tr>
}




   
  </tbody>
</table>
        </div>
</div>
      
    </div>
  )
}

export default Home