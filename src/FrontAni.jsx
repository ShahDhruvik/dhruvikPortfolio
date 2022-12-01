import React, { useEffect, useState } from 'react'
import './style/frontAni.css'

const FrontAni = () => {
  const [remove, setremove] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setremove(true)
    }, 2000)
  }, [])

  return (
    <div className={`pfFrontAni ${remove ? 'left-[-1660px]' : 'left-0'}`}>
      <h1 className="ani">Hello,</h1>
      {/* <h2 className='ani'>Welcome To</h2> */}
      <h2 className="ani">I'm Dhruvik Shah</h2>
    </div>
  )
}

export default FrontAni
