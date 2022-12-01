import React from 'react'
import FrontAni from './FrontAni'
import './style/header.css'
const Header = () => {
  const list = [
    { name: 'ABOUT', link: './' },
    { name: 'CONTACT', link: './' },
    { name: 'EDUCATION', link: './' },
    { name: 'SERVICE', link: './' },
  ]
  return (
    <>
      <FrontAni />
      <div className="pfHeader">
        <h1>
          Shah<span>Dhruvik</span>
        </h1>
        <div>
          <button>
            <img src="menu.svg" alt="menu" />
          </button>
          <nav>
            <ul>
              {list.map((item) => {
                return (
                  <li key={item.name} >
                    <a href={item.link}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
