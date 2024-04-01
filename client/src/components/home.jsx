import React from 'react'

import '../styles/home.css'

function Home() {
  
  return (
    <div className='bg-img'>
       <div className='exp'>
        {/* <img className='image' src="./bg.jpg" alt="" /> */}
        </div> 
      <div className='home'>
        <div className="home-container">

        <h1 >
            RELEASE YOUR MUSIC WITH PIND HOOD DAMN GOOD!
        </h1>
      
        <p>
        We’re here to help the next generation of artists to fully control their artistic development. We can help you with everything from placing your releases on all music streaming services to developing your career through financial and promotional resources.
        </p>
        </div>
        <div className="asset-img">
        <img src="./asset-remove-bg.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
