import './HomePoster.scss'

function HomePoster() {
  return (
    <div className='HomePoster_container'>
      <div className='HomePoster_contain'>
        <div className='HomePoster_deepContent'>
          <div className='HomePoster_textContent'>
            <p className='HomePoster_heading'>
              Discover Your Dream Property with Estatein
            </p>
            <p className='HomePoster_paragraph'>
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className='HomePoster_buttons'>
            <button className='HomePoster_head'>
              <p className='HomePoster_includes'>
                Learn More
              </p>
            </button>
            <button className='HomePoster_btn'>
              <p className='HomePoster_includ'>
                Browse Properties
              </p>
            </button>
          </div>
          <div className='HomePoster_score'>
            <div className='HomePoster_text'>
              <h1 className='HomePoster_number'>200+</h1>
              <p>HHomePostery Customers</p>
            </div>
            <div className='HomePoster_text'>
              <h1 className='HomePoster_number'>10k+</h1>
              <p>Properties For Clients</p>
            </div>
            <div className='HomePoster_text'>
              <h1 className='HomePoster_number'>16+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className='HomePoster_circle'>
            <img className='HomePoster_circleImg' src="/images/circle.png" alt="circle logo" />
          </div>

        </div>
      </div>
      <div className='HomePoster_bgImage'>
        <img className='HomePoster_image' src="/images/building.png" alt="building" />
      </div>
    </div>
  )
}

export default HomePoster