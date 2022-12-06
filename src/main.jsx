import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import Banner from './Banner'
import Slider from './Slider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Banner />
    <Slider />
  </>,
)
