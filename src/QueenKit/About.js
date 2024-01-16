import React from 'react'
import './about.css'
import Aboutus from '../Assets/about_us.png'

const About = () => {
  return (
      <div className="containery">
          <div className='photo'>
            <div className='photo_blur'></div>
            <div className='img'>
            <img src={Aboutus} alt='about icon'/>
            </div>
        </div>
        <div className="header">
            <h1><i><b>About Us:</b></i></h1>
            <div className='text'>
            <div style={{textAlign: 'center'}} className='description'>
                <p>
                    <i>
                        <b>
        Hi healthy food lovers❤😍
Are you looking for where to get your delicious healthy meals💯
I want you to know QUEEN’S KITCHEN Gat you cover💯❤we deal on all varieties of meals ..rice,soup any kind soups❤💯in plates,bowls. We also cover for party and events as well 
We’re located at ugheli delta state..and deliver to anywhere in delta state
                        </b>
                    </i>
                </p>
            </div>
            </div>
            <div className='services'>
                <h1><b><i>Our Services:</i></b></h1>
            </div>
            <div className="service">
                <span className="bullet">Home Assistance</span>
                <span className="bullet">Party meals</span>
                <span className="bullet">foodtray</span>
            </div>
        </div>
        
    </div>
  )
}

export default About