import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

const [inputVal,setInputVal] = useState('');

const [data,setData] = useState([])
// write a useState for the data to reload after adding new tasks
const [change,setChange] = useState({});

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
      let apiResponse = await axios.post(" http://localhost:3000/todo",reqBody);
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
    
let apiResponse = await axios.get(" http://localhost:3000/todo");
setData(apiResponse.data);
console.log(apiResponse.data)


  } catch (error) {
    console.log(error);
    alert("failed to get todo tasks")
  }

}

  return (
    <div className=''>
<div className='d-flex justify-content-center'>
    <h1 className='text-warning ' >Todo Tasks📒</h1>
</div>

        <div className='inpCard container bg-danger mt-4 d-flex gap-5 p-3 justify-content-center'>
            <input onChange={(event)=> setInputVal(event.target.value)} className='taskInp' value={inputVal} type="text" />
            <button onClick={addClick} className='btn btn-primary'>Add Task</button>
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
      <td><button className='btn btn-warning'><i className="fa-solid fa-pen-to-square"></i></button> <button  className='btn btn-danger' ><i className="fa-solid fa-trash"></i></button></td>
    </tr>

  ))
}
</> : <h1>no tasks found</h1>
}




   
  </tbody>
</table>
        </div>
</div>
      
    </div>
  )
}

export default Home