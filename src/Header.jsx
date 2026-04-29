import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <div className='d-flex justify-content-center pt-3'>
    <ul className='navbarLinks'>
    <li ><Link  to={"/"}>Home</Link></li>
     <li ><Link>Page 02</Link></li>
      <li ><Link>Page 03</Link></li>
    </ul>
</div>
    </div>
  )
}

export default Header