import React from 'react'
import './home.css';


const Banna = () => {
  return (
    <div className="banny" style={{width:'100%'}}>
        <div className="grid">
              <div className="banner">
                <img className="pics" style={{width:'100%', height:'100%', borderRadius:'0'}} src='https://i.pinimg.com/236x/db/78/b0/db78b025172cbde849ceb7f69a7fc05e.jpg' alt='icon'/>
            </div>
            <div className="banner"><img className="pics" style={{width:'100%', height:'100%', borderRadius:'0'}} src='https://i.pinimg.com/236x/d0/d8/f3/d0d8f34e5976741e3784f48010e97d57.jpg' alt='icon'/></div>
          </div>
        <div className='topic'>
            <h1 className='titl' style={{color:'#ffdb58'}}><i><b>Delicious meals at affordable prices</b></i></h1>
        </div>
    </div>
  )
}

export default Banna
