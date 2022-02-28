import React from 'react'

function Header() {
  return (
    <div className='nav'>
        <img className="nav-img" src={process.env.PUBLIC_URL + "/images/globe.png"} alt="Globe" />
        <h1 className='nav-title'>my travel journal</h1>
    </div>
  )
}

export default Header