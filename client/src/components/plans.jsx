import React from 'react'
import '../styles/plans.css'
import { Link } from 'react-router-dom'
function Plans() {
  return (
    <div className='plans-container'>
      <div className='plans-header'>
        <h1>Our Plans</h1>
      </div>
      <div className="plans-description">
        <div className='plans-items'>
            <div className="plans-items-container">
                <h2 className='plans-items-header'>Basic</h2>

                <p className='plans-price'>$16.62/song</p>
                <div className="plans-items-button">
                <Link>
                <button>Get started</button>
                </Link>
                </div>
                <p>✓ Perfect plan for launching your music career with Indian and international store presence.</p>
                <p>✓ Enjoy lifetime support, 90% royalties, and 100% copyright ownership.</p>
                <p>✓ Ideal for beginners seeking a one-time fee option with essential features.</p>
            </div>
        </div>
        <div className='plans-items'>

            <div className='plans-items-container'>
                <h2 className='plans-items-header'>Premium</h2>
                <p className='plans-price'>$16.62/song</p>
                <div className="plans-items-button">
                <Link>
                <button>Get started</button>
                </Link>
                </div>
                <p>✓ Perfect plan for launching your music career with Indian and international store presence.</p>
                <p>✓ Enjoy lifetime support, 90% royalties, and 100% copyright ownership.</p>
                <p>✓ Ideal for beginners seeking a one-time fee option with essential features.</p>
            </div>
        </div>
        <div className='plans-items'>
            <div className="plans-items-container">     
                <h2 className='plans-items-header'>Latest</h2>
                <p className='plans-price'>$16.62/song</p>
                <div className='plans-items-button'>
                <Link>
                <button>Get started</button>
                </Link>
                </div>
                <p>✓ Perfect plan for launching your music career with Indian and international store presence.</p>
                <p>✓ Enjoy lifetime support, 90% royalties, and 100% copyright ownership.</p>
                <p>✓ Ideal for beginners seeking a one-time fee option with essential features.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
