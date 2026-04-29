import React, { useState } from 'react'

const BackgroundColor = () => {

    const [color,setColor] = useState('white')

  return (
    <div  style={{height:"100vh", backgroundColor:color}} className='d-flex justify-content-center  gap-3'>
        <div>
            <button onClick={()=>setColor('red')} className='btn btn-danger'>Red</button>
        </div>
        <div>
            <button onClick={()=>setColor('blue')} className='btn btn-primary'>Blue</button>
        </div>
        <div>
            <button  onClick={()=>setColor('green')}className='btn btn-success'>Green</button>
        </div>
        <div>
            <button onClick={()=>setColor("yellow")} className='btn btn-warning'>Yellow</button>
        </div>
    </div>
  )
}

export default BackgroundColor