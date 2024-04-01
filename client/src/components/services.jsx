import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/services.css'
function Services() {
  return (
      <div className='services'>
    <div className='services-header'>
      <h1>Our Services</h1>
    </div>
      <div className='services-container'>
        <div className='services-container-list'>
          <div className='services-list'>
            <h3>Distribution</h3>
            <p>To encourage a new generation of musicians, we think that anyone and everyone should be allowed to publish their music. We provide free distribution in addition to higher level of features as you grow.</p>
            <Link>
              <button>Get started</button>
              </Link>
          </div>
          <div className='services-list'>
            <h3>Label</h3>
            <p>Are you an aspiring artist looking for a platform to showcase your talent and release your music? Look no further than Pind Hood Records, where we strive to cultivate the next generation of musical pioneers.</p>
            <Link>
              <button>Get started</button>
              </Link>
          </div>
          <div className='services-list'>
            <h3>Artist Management</h3>
            <p>We work closely with our artists to develop strategic career plans that align with their artistic vision and long-term goals. We provide guidance and support every step of the way.</p>
            <Link>
              <button>Get started</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Services
