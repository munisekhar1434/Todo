import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <ul>
          <Link to='/' onClick={()=>alert('you are in Home page')}>Home</Link><br/>
          <Link to='/dashbord'onClick={()=>alert('you are in Dashbord page')}>Dashboard</Link><br></br>
          <Link to='/menu'onClick={()=>alert('you are in menu page')}>Menu</Link><br></br>

        </ul>
    </div>
  )
}

export default Navbar
