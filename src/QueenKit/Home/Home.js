import React from 'react';
import Carosuel from './Carosuel';
import Menu from './menu'
import Intro from './Intro';

import './home.css';

const Home = () => {
  return (
    <div className="contair">

        <Carosuel style={{ height:'20%',marginTop:'1.5rem'}} />
        <Intro />
        <Menu />
    </div>
  );
}

export default Home;
