import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from "@uidotdev/usehooks";
import '../styles/footer.css'
function Footer() {
  const isSmallDevice = useMediaQuery(" (max-width : 539px)")
  return (

    
    <div className='footer-container'>
      <div className="footer-flex">
          {isSmallDevice?
          <>
        <div className="footer-item1">
          <div className="footer-items-header">
          <h1>Pind Hood Records</h1>
          </div>
        </div>
          <div className="footer-item2">
            <div className="footer-items-header">
              <h3>Explore</h3>
            </div>
            <div className="footer-items-links">
              <Link>Music Distribution</Link>
              <Link>Label</Link>
              <Link>Pricing</Link>
              <Link>Blog</Link>
            </div>
          </div>
          <div className="footer-item3">
            <div className="footer-items-header">
              <h3>Resources</h3>
            </div>
            <div className="footer-items-links">
              <Link>Support</Link>
              <Link>About us</Link>
              <Link>Careers</Link>
              
            </div> 
          </div>
          <div className='footer-item1-social-media'>
            <Link><button><img src="./fb.png" width="30px" height="30px"alt="" /></button></Link>
            <Link><button><img src="./ig.jpg" width="30px" height="30px"alt="" /></button></Link>
            <Link><button><img src="" alt="" /></button></Link>
            <Link><button><img src="" alt="" /></button></Link>
            <Link><button><img src="" alt="" /></button></Link>
            <Link><button><img src="" alt="" /></button></Link>
          </div>
        

          </>
          
          :
            <>
            <div className="footer-item1">

            <div className="footer-items-header">
            <h1>Pind Hood Records</h1>
            <h4>Pind Hood Damn Good</h4>
            </div>
              <div className='footer-item1-social-media'>
                <Link><button><img src="./fb.png" width="30px" height="30px"alt="" /></button></Link>
                <Link><button><img src="./ig.jpg" width="30px" height="30px"alt="" /></button></Link>
                <Link><button><img src="" alt="" /></button></Link>
                <Link><button><img src="" alt="" /></button></Link>
                <Link><button><img src="" alt="" /></button></Link>
                <Link><button><img src="" alt="" /></button></Link>
              </div>
            </div>
            <div className="footer-item2">
            <div className="footer-items-header">
            <h3>Explore</h3>
            </div>
            <div className="footer-items-links">
            <Link>Music Distribution</Link>
            <Link>Label</Link>
            <Link>Pricing</Link>
            <Link>Blog</Link>
            </div>
        </div>
          <div className="footer-item3">
            <div className="footer-items-header">
              <h3>Resources</h3>
            </div>
            <div className="footer-items-links">
              <Link>Support</Link>
              <Link>About us</Link>
              <Link>Careers</Link>
            </div> 
          </div>
            </>
          }
 
      </div>
      <div className="footer-copyright">
      <small>&copy; Copyright 2024 <b>
        | Pind Hood Records | 
        </b> 
         All Rights Reserved
        </small>
      </div> 
    </div>
  )
}

export default Footer
