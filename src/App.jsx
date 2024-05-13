import React from 'react'
import  "./App.scss"




export default function App() {
  return (
    <div className='App'>
      <div className='App_Desc'>
      <img src="/images/1.png" alt="" />
        <h1>Our values</h1>
          <p>
           Our story is one of continuous growth and evolution.We started as a small team
           with big dreams, determined to create a real estate platform that transcended the 
           ordinary.
          </p>
      </div>

      <div className="App_content">
          <div className="First_content">
            <div className='name'>
            <img src="/images/2.png" alt="" />
            <h2>Trust</h2> 
            </div>
            <p>Trust is the cornestrone of 
            every succesful real estate transaction
            </p>
            <div className="Second_content">
            <div className="name">
                <img src="/images/4.png" alt="" />
                <h2>Client-Centric</h2>
                </div>
                <p>Your dreams and needs are at the center of our universe.We listen,understand </p>
          </div>
          </div>
            
          <div className="App_content_second">
              <div className="name">
                <img src="/images/3.png" alt="" />
                <h2>Excellence</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum aperiam adipisci explicabo nemo libero.</p>
      <div className="s">
          <div className="name">
            <img src="/images/2.png" alt="" />
            <h2>Our Commitment</h2>
          </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi assumenda aspernatur possimus maxime ratione!</p>
           </div>
          </div>
          </div>

         
            
           
           
      
    </div>
  )
}
