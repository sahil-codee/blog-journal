import React from 'react'

function Header() {
  return (
    <div className='nav'>
        <img className="nav-img" src={"/images/globe.png"} alt="" />
        <h1 className='nav-title'>my travel journal</h1>
    </div>
  )
}

export default Header