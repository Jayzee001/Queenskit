import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { BsTelegram } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import './footer.css'
const footer = () => {
    let whatsapp = <BsWhatsapp />
    let instagram = <FaInstagram />
    let telegram = <BsTelegram />
    let twitter = <LuTwitter />
    let fb = <PiFacebookLogoBold />
  return (
      <div className='footer' style={{ backgroundColor: 'black' }}>
          <h4 style={{color:'grey'}}>Contact the developer at:</h4>
    <div className="socials">
            <a href="//wa.me/2349032289003"
                > <span style={{ color: '#ffdb58' }} >{whatsapp}</span></a>
        <a href="https://www.instagram.com/johnpeter5097/"
> <span style={{ color: '#ffdb58' }} >{instagram}</span></a>
        <a href="https://www.instagram.com/johnpeter5097/"
> <span style={{ color: '#ffdb58' }} >{telegram}</span></a>
        <a href="https://www.facebook.com/nwanze.johnmary"
> <span style={{ color: '#ffdb58' }} >{fb}</span></a>
        <a  href="https://twitter.com/JohnmNwanze"
> <span style={{ color: '#ffdb58' }} >{twitter}</span></a>
      </div>
      </div>
  )
}

export default footer