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
  const openNav=()=>{
    setopenBtn(!openBtn)
  }
  return (
    <>
      {/* <FrontAni /> */}
      <div>
        <div className="pfHeader">
          <h1>
            Shah<span>Dhruvik</span>
          </h1>
          <div>
            <button>
              <img src="menu.svg" alt="menu"  onClick={openNav} className={`${openBtn ? "hidden": "visible"}`}/>
            </button>
            <nav>
              <ul>
                {list.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="frontAni">
          {/* Hello, I'm Dhruvik Shah */}
          <p>Hello</p>
        <p>I'm Dhruvik Shah</p>
        </div>
      </div>
    </>
  )
}

export default Header
