import React from 'react'
import Navbar from './Navbar'
import {TbGridDots} from "react-icons/tb"
import { Link } from 'react-router-dom'
import {AiFillLinkedin, AiFillMail, AiFillFacebook} from "react-icons/ai"
import {FaGithubSquare, FaWhatsapp, FaCode} from "react-icons/fa"
import {RiTwitterXLine} from "react-icons/ri"
import { ReactTyped,Typed } from "react-typed";



const Home = ({show, setShow}) => {
  return (
    <>
    <section className='page homePage' >
    <Navbar show={show} />
    <TbGridDots onClick={()=> setShow(!show)} className="hamburger" />
      
      <div className="banner">
      <h1>Manav</h1>
      <h1>Tyagi</h1>
      <p><ReactTyped
          
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={90}
          backSpeed={90}
          loop={true}
        /></p>
      <div className='btns' >
        <Link to="https://res.cloudinary.com/dejl5i2ws/raw/upload/Manav_Tyagi_Noida_UP___Date_Of_Birth___08-12-2001__Phone___91-7838963301__LinkedIn__account___Email__manav_2_jxah3g.docx" >Resume</Link>
        <Link to="/portfolio" >Portfolio </Link>
      </div>

      </div>
      <footer>
        <ul>
          <Link to={"https://www.geeksforgeeks.org/user/manavtyagi0812/"} target="_blank">
            <FaCode/>
          </Link>
          <Link to={"https://www.linkedin.com/in/manav-tyagi-750072200/"} target="_blank">
            <AiFillLinkedin/>
          </Link>
          <Link to={"https://www.facebook.com/manav.tyagi.5492"} target="_blank">
            <AiFillFacebook/>
          </Link>
          <Link to={""} target="_blank">
            <RiTwitterXLine/>
          </Link>
          <Link to={"https://github.com/Mnavtyagi"} target="_blank">
            <FaGithubSquare/>
          </Link>
          <Link to={""} target="_blank">
            <FaWhatsapp/>
          </Link>
          <Link to={"manav.tyagi0812@gmail.com"} target="_blank">
            <AiFillMail/>
          </Link>
          

        </ul>
        <a className="download-btn" href="Resume.pdf" download="Resume.pdf">[Download CV]</a>
      </footer>
    </section>

    </>
  )
}

export default Home;