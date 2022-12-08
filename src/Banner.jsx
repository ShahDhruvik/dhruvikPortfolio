import React from 'react'
import './style/banner.css'

const Banner = () => {
  return (
    <div className="pfBanner pfBannerImg">
      <div className="pfBannerSum">
        <h1>I design products that delight and inspire people.</h1>
        <p>
          Hi! I’m Dhruvik, a product designer in react language . I create
          user-friendly interfaces for fast-growing startups.
        </p>
      </div>
      <div className="pfBannerImg">{/* <img src="bg.jpg" alt="" /> */}</div>
    </div>
  )
}

export default Banner
