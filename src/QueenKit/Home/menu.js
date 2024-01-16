import React from 'react'
import './home.css';
import Main from './Grid'
import Banner from './Banna'


const menu = () => {
  return (
      <div className="main">
        <Banner />
          <div className="main_grid">
              <Main />
        </div>
        <Banner />
    </div>
  )
}

export default menu
