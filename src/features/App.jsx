import React from 'react'
import './App.scss'

function App() {
  return (
    <div className='App_container'>
        <div className='App_contain'>
            <div className='App_deepContent'>
                <div className='App_textContent'>
                    <p className='App_heading'>
                        Discover Your Dream Property with Estatein
                    </p>
                    <p className='App_paragraph'>
                        Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                    </p>
                </div>
                <div className='App_buttons'>
                    <button className='App_head'>
                        <p className='App_includes'>
                            Learn More
                        </p>
                    </button>
                    <button className='App_btn'>
                        <p className='App_includ'>
                            Browse Properties
                        </p>
                    </button>
                </div>
                <div className='App_score'>
                    <div className='App_text'>
                        <h1 className='App_number'>200+</h1>
                        <p>Happy Customers</p>
                    </div>
                    <div className='App_text'>
                        <h1 className='App_number'>10k+</h1>
                        <p>Properties For Clients</p>
                    </div>
                    <div className='App_text'>
                        <h1 className='App_number'>16+</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div className='App_bgImage'>
                        <img className='App_image' src=".//public/images/building.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default App