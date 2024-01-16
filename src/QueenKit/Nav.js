import {useRef} from 'react'
import './nav.css'
import Container from 'react-bootstrap/Container';
import Logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { IoCallSharp } from "react-icons/io5";
import { SocialIcon } from 'react-social-icons';
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { BsTelegram } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiOutlineBars } from "react-icons/ai";



const NavBar = () => {
    let call = <IoCallSharp />
    let whatsapp = <BsWhatsapp />
    let instagram = <FaInstagram />
    let telegram = <BsTelegram />
    let twitter = <LuTwitter />
    let fb = <PiFacebookLogoBold />
    let navBar = <AiOutlineBars />

    //responsive nav
      const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    }



return (
    <div className="navbar">
        <div className='logo'>
            <Link to='/'>
                <div className='h1' style={{ marginRight: '-12px', marginTop:'-18px' }}><img className="logoo" src={Logo} alt='Health-Logo' /></div>
        </Link>
            <span className='bla'>Queens</span>
            <span className='blu'>Kit</span>
        </div>
        <div className='toggle' ref={navRef}>
                <button className='exit' onClick={showNavbar }>
                    {navBar}
            </button>
        </div>
        <nav ref={navRef}>
                <ul>
            <li>
                <Link ref={navRef} to="/">
                    Home
                  </Link>
                </li>
                        <li>
                <Link ref={navRef} to="/About">
                    About
                  </Link>
                </li>
            <li>
                <Link ref={navRef} to="/Contact">
                    Contact
                  </Link>
                </li>
            </ul>
            <a href="tel:+2349166830624" ref={navRef}><button className='nav-btn' >Book Appointments <span style={{ color: '#704e2e' }}>{call}</span></button></a>
        <div className="socials">
            <a href="//wa.me/2349032289003"
                > <span style={{ color: '#ffdb58' }} ref={navRef}>{whatsapp}</span></a>
        <a href="https://www.instagram.com/johnpeter5097/"
> <span style={{ color: '#ffdb58' }} ref={navRef}>{instagram}</span></a>
        <a onClick={ showNavbar}href="https://www.instagram.com/johnpeter5097/"
> <span style={{ color: '#ffdb58' }} ref={navRef}>{telegram}</span></a>
        <a onClick={ showNavbar} href="https://www.facebook.com/nwanze.johnmary"
> <span style={{ color: '#ffdb58' }} ref={navRef}>{fb}</span></a>
        <a onClick={ showNavbar} href="https://twitter.com/JohnmNwanze"
> <span style={{ color: '#ffdb58' }} ref={navRef}>{twitter}</span></a>
            </div>
            <div ref={navRef} className="exit">
            <button onClick={ showNavbar} className="button_ex">
                    X
                </button>
            </div>
        
            </nav>
    </div>
)
}

export default NavBar