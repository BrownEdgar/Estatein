import React from 'react'
import './SliderReviews.scss'

export default function SliderReviews() {
  return (
    <div className='sliderReviews'>
      <div className="sliderReviews__container">
        <div className="sliderReviews__abstract">
          <img src="/images/Abstract_Design.png" alt="abstract" />
        </div>
        <div className="sliderReviews__text">
          <div>
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about Estatein's services, property listings, and the real estate  process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <button className='sliderReviews__btn'>View All FAQ's</button>
        </div>
      </div>
    </div>
  )
}
