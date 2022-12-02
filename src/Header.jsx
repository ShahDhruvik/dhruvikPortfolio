import React, { useState } from 'react'
import FrontAni from './FrontAni'
import './style/header.css'
const Header = () => {
  const list = [
    { name: 'ABOUT', link: './' },
    { name: 'CONTACT', link: './' },
    { name: 'EDUCATION', link: './' },
    { name: 'SERVICE', link: './' },
  ]
  const [openBtn, setopenBtn] = useState(false)
  const openNav = () => {
    setopenBtn(!openBtn)
  }
  
  return (
    <>
      {/* <FrontAni /> */}

      <div className="pfHeader">
        <div className="pfNameBtn">
          <h1>
            shah<span>Dhruvik</span>
          </h1>
          {openBtn == false && (
            <button>
              <img src="menu.svg" alt="menu" onClick={openNav} />
            </button>
          )}
        </div>
        <div className={` ${openBtn ? 'pfNavClose pfNavCls' : '  pfNavWeb '}  `}>
          <nav>
            <ul>
              <li>
                <a href="./">ABOUT</a>
              </li>
              <li>
                <a href="./">CONTACT</a>
              </li>
              <li>
                <a href="./">EDUCATION</a>
              </li>
              <li>
                <a href="./">SERVICE</a>
              </li>
            </ul>
          </nav>
          <button>
            <img src="close.svg" alt="menu" onClick={openNav} />
          </button>
        </div>
      </div>
      <div className="frontAni">
        {/* Hello, I'm Dhruvik Shah */}
        <p>Hello</p>
        <p>I'm Dhruvik Shah</p>
      </div>
    </>
  )
}

export default Header
