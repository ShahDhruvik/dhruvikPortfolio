import React from 'react'
import './style/slider.css'

const moveLeft = () => {
  let slider = document.getElementById('sliderArea')
  slider.scrollLeft = slider.scrollLeft - 500
}
const moveRight = () => {
  let slider = document.getElementById('sliderArea')
  slider.scrollLeft = slider.scrollLeft + 500
}
const sliderImg = [
  {
    id: 1,
    img: 'sliderimg1.jpg',
  },
  {
    id: 2,
    img: 'sliderImg2.jpg',
  },
  {
    id: 3,
    img: 'sliderImg3.jpg',
  },
  {
    id: 4,
    img: 'sliderImg4.jpg',
  },
  {
    id: 5,
    img: 'sliderImg5.jpg',
  },
  {
    id: 7,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
  },
  {
    id: 8,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
  },
  {
    id: 9,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
  },
  {
    id: 10,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
  },
]
const Slider = () => {
  return (
    <>
      <div className="sliderWrapper">
        <button
          type="button"
          className="opacity-50 hover:opacity-100"
          onClick={moveLeft}
        >
          <img src="/leftButton.svg" alt="" />
        </button>
        <div
          id="sliderArea"
          className=" sliderArea snap-x   w-full h-full overflow-auto whitespace-nowrap scroll scroll-smooth"
        >
          {sliderImg.map((item) => {
            return (
              <div key={item.id} className="  snap-center inline-block">
                <img
                  className=" w-[320px] sm:w-[450px] lg:w-[500px] inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300 aspect-video "
                  src={item.img}
                  alt=""
                />
                <p className=" m-2 bg-slate-900 text-gray-200 text-center hover:scale-105">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            )
          })}
        </div>
        <button
          type="button"
          className="opacity-50 hover:opacity-100"
          onClick={moveRight}
        >
          <img src="/rightButton.svg" alt="" />
        </button>
      </div>
    </>
  )
}

export default Slider
