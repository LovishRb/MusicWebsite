import React from 'react'
import '../styles/music-distribution.css'
import { Link } from 'react-router-dom'
function MusicDistribution() {
  return (
    <div className='music-distribution'>
       <div className='music-distribution-image'>
      <img src="./music-distribution.asset.jpeg" alt="" />
       </div>
      <div className="get-music-distributed">
        <h1>Get Your Music Distributed</h1>
        <p>“Start distributing your music across all significant streaming services without giving up your rights. By partnering with us to distribute your music, you enable our label staff to ride the wave of your success. We collaborate with carefully selected artists, providing license agreements that benefit artists as well as expand music.”</p>
        <p className='get-started-button'>
        <Link >
        <button >Get started</button>
        </Link>
        </p>
      </div>
    </div>
  )
}

export default MusicDistribution
