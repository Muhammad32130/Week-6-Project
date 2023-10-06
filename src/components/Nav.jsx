import React from 'react'
import logo from "../images/logo.png"
import  "../components/Nav.css"

function Nav() {
  return (
    <div className='contain'>
      
    <nav>
                    <div className="one">
                       <img src={logo} alt="" />
                        <div className="lists">
                            <li className="one__home"><a href="#">Home</a></li>
                            <li className="one__about"><a href="#">About</a></li>
                            <li className="one__contactUs"><a href="#">Contact Us</a></li>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default Nav