import React from 'react'
import SliderSlick from '../Slider_slick/SliderSlick'
import './SliderReviews.scss'

export default function SliderReviews() {
  return (
    <div className='sliderReviews'>
      <div className="sliderReviews__container">
        <div className="sliderReviews__abstract">
          <img src="/images/Abstract_Design.png" alt="abstract" />
        </div>
        <div className="sliderReviews__head">
          <div>
            <h1 className='sliderReviews__title'>Frequently Asked Questions</h1>
            <p className='sliderReviews__text'>
              Find answers to common questions about Estatein's services, property listings, and the real estate  process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <button className='sliderReviews__btn'>View All FAQ's</button>
        </div>
      </div>
      <div className="sliderReviews__slider">
        <SliderSlick/>
      </div>
    </div>
  )
}
