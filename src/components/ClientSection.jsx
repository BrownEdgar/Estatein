import MultipleItems from './MultipleItems';
import "./ClientSection.scss"
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ClientSection() {

  return (
    <div className='container'>
      <div className="title-container">
          <img src="images/rate/Abstract Design.png" alt="" className="title-rate" />
          <div className="title">
            <div className="title-text">
              <h1>What Our Clients Say</h1>
              <p className="desc">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            </div>
            <div className="title-btn">
              <button>View All Testimonials</button>
            </div>
          </div>
      </div>
      <MultipleItems/>
      
    </div>
  )
 }

