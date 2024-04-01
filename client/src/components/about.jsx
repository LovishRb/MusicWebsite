import React from 'react'
import '../styles/about.css'
function About() {
  return (
    <div className="a">
      <div className="navbar-size-div">
        {/* /* this div is get our contact content below navbar */}
      </div> 
        <div className='about-container'>
            <div className="about-header">
                <div className="about-item">
                <h1>About</h1>
                <p>
                We’re here to help the next generation of artists to fully control their artistic development. We can help you with everything from placing your releases on all music streaming services to developing your career through financial and promotional resources.</p>
                <p>Karanbir Singh Brar is the visionary founder and dynamic CEO behind Pind Hood Records, a cutting-edge music label that is making waves in the global music industry. With a passion for music that runs deep in his veins, Karanbir has embarked on a remarkable journey to redefine the music landscape. Under his leadership, Pind Hood Records has become a hub for emerging and established talent, offering a platform for artists to unleash their creativity and connect with audiences worldwide.</p>
                <p>Beyond his role as a CEO, Karanbir is also a passionate advocate for artists’ rights and fair compensation in the digital age. His dedication to creating a fair and sustainable ecosystem for musicians has earned him respect not only within the industry but also among artists themselves. With Karanbir Singh Brar at the helm, Pind Hood Records is poised to continue its meteoric rise, shaping the future of music and leaving an indelible mark on the industry for years to come.</p>
                </div>
                <div className="about-img"><img src="./nav-logo.png" alt="" /></div>
            </div>
        </div>
        <div className="about-team">
            <h1>Team</h1>
            <div className="owners">
                <div className="founder">
                    <div className="founder-img">
                        <img src="./karan-brar.jpg" alt="" />
                    </div>
                    <h3>Karan Brar</h3>
                    <p>Founder/CEO</p>
                </div>
                <div className="co-founder">
                    <div className="co-founder-img">
                        <img src="./Luvv-beats.jpg" alt="" />
                    </div>
                    <h3>Luvv</h3>
                    <p>Co Founder/CEO</p>
                </div>
            </div>
            <div className="team-management">
            <div className="co-founder">
                    <div className="co-founder-img">
                        <img src="./Luvv-beats.jpg" alt="" />
                    </div>
                    <h3>Luvv</h3>
                    <p>Co Founder/CEO</p>
                </div>
                <div className="co-founder">
                    <div className="co-founder-img">
                        <img src="./Luvv-beats.jpg" alt="" />
                    </div>
                    <h3>Luvv</h3>
                    <p>Co Founder/CEO</p>
                </div>
                <div className="co-founder">
                    <div className="co-founder-img">
                        <img src="./Luvv-beats.jpg" alt="" />
                    </div>
                    <h3>Luvv</h3>
                    <p>Co Founder/CEO</p>
                </div>
                <div className="co-founder">
                    <div className="co-founder-img">
                        <img src="./Luvv-beats.jpg" alt="" />
                    </div>
                    <h3>Luvv</h3>
                    <p>Co Founder/CEO</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
