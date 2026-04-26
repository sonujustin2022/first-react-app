import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
<div className='d-flex justify-content-center pt-3'>
    <ul className='navbarLinks'>
    <li ><Link>Home</Link></li>
     <li ><Link>Page 02</Link></li>
      <li ><Link>Page 03</Link></li>
    </ul>
</div>

<div className='d-flex justify-content-center'>
    <h1 className='text-warning ' >Todo Tasks📒</h1>
</div>

        <div className='inpCard container bg-danger mt-4 d-flex gap-5 p-3 justify-content-center'>
            <input className='taskInp' type="text" />
            <button className='btn btn-primary'>Add Task</button>
        </div>


<div className='container tableCard mt-5'>
  <div className='taskTable'>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tasks</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>task - wake up</td>
      <td><button className='btn btn-warning'>edit</button> <button  className='btn btn-danger' >Delete</button></td>
    </tr>
  </tbody>
</table>
        </div>
</div>
      
    </div>
  )
}

export default Home