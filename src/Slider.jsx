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
    info: 'this ia a bird',
  },
  {
    id: 2,
    img: 'sliderImg2.jpg',
    info: 'this ia a bird',
  },
  {
    id: 3,
    img: 'sliderImg3.jpg',
    info: 'this ia a bird',
  },
  {
    id: 4,
    img: 'sliderImg4.jpg',
    info: 'this ia a bird',
  },
  {
    id: 5,
    img: 'sliderImg5.jpg',
    info: 'this ia a bird',
  },
  {
    id: 7,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
    info: 'this ia a bird',
  },
  {
    id: 8,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
    info: 'this ia a bird',
  },
  {
    id: 9,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
    info: 'this ia a bird',
  },
  {
    id: 10,
    img:
      'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80',
    info: 'this ia a bird',
  },
]
const Slider = () => {
  return (
    <>
      <div className="bg-[#070636]">
        <div className=" container mx-auto p-2 bg-[#070636]">
          <p className=" textGradient text-center  text-6xl font-extrabold ">
            THIS IS ALL I HAVE MADE
          </p>
        </div>
        <div className="sliderWrapper">
          <button type="button" className="btnSlider" onClick={moveLeft}>
            <img src="/leftButton.svg" alt="" />
          </button>
          <div
            id="sliderArea"
            className="  sliderArea snap-x w-full h-full overflow-auto whitespace-nowrap scroll scroll-smooth md:border-[5px] md:rounded-3xl md:border-[#119365]"
          >
            {sliderImg.map((item) => {
              return (
                <div key={item.id} className="  snap-center inline-block">
                  <img
                    className="  w-[320px] sm:w-[450px] lg:w-[500px] inline-block px-4  py-8 cursor-pointer hover:scale-110 ease-in-out duration-300 aspect-square sm:aspect-video md:aspect-video  "
                    src={item.img}
                    alt=""
                  />
                  <p className=" pb-1 text-[#119365]  md:bg-[#119365] md:text-[#070636] font-bold text-center hover:scale-105">
                    {item.info}
                  </p>
                </div>
              )
            })}
          </div>
          <button type="button" className="btnSlider" onClick={moveRight}>
            <img src="/rightButton.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider
