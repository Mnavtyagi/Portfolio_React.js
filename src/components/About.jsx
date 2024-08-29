import React from 'react'
import Navbar from './Navbar'
import {TbGridDots} from "react-icons/tb"

const About = ({show, setShow}) => {
  return (
    <>
    <section className="page aboutPage" >
    <Navbar show={show} />
    <TbGridDots onClick={()=> setShow(!show)} className="hamburger" />

    <div className="banner">
      <div className="content">
        <div>
          <h1>ABOUT</h1>
          <h3>manav.tyagi0812@gmail.com</h3>
        </div>
        <div>
        Hello, I'm Manav Tyagi, a Frontend and Backend Developer with a versatile skill set that bridges the gap between captivating user interfaces and robust backend functionality. I specialize in crafting visually appealing and user-friendly websites using HTML, CSS, and JavaScript. Beyond the frontend, I have valuable insights into backend technologies, enabling me to create seamless, end-to-end web solutions.
        <br/>
              <span>
                {" "}
                With a keen eye for detail and a passion for innovative design, I thrive on creating interactive, responsive websites that engage users and elevate their experience. My expertise in efficient data handling and server-side processes ensures that the functionality behind the scenes is as impressive as what users see on the screen.
                <br/>
              </span>
              <span>
              
              I believe in the power of collaboration and am always excited to tackle new challenges and explore fresh ideas. Let's work together to bring your web project to life, combining design elegance with technical excellence. Whether you're looking to build a stunning website from scratch or enhance an existing one, I'm here to make your vision a reality.
              </span>
        </div>
        <div>
          <p>Uttar Pradesh, India</p>
          <p>Vasundhara, GZB</p>
        </div>
      </div>
      <div className="profileImage">
        <img src="black-and-white-astronaut-mobile.webp" alt="profileImage" />
        <span></span>
      </div>
    </div>

    </section>
    </>
  )
}

export default About