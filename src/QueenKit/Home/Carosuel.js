import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Spagetti from '../../Assets/spagetti.jpg';
import BangaSoup from '../../Assets/banga_soup.jpg';
import FriedRice from '../../Assets/fried_rice.jpg';
import Meal from '../../Assets/meals.jpg';
import foodtray from '../../Assets/foodtray.jpg';
import Fruit from '../../Assets/fruits.jpg';
import Val from '../../Assets/val.jpg';
import './home.css';


const Carosuel = () => {
  return (
    <div className="holds">
      <div className='caro'>
      <Carousel fade style={{height: '70', width: '80%'}}>
        <Carousel.Item  interval={1500}>
          <img  className="d-block w-100" src={Val} alt="Delicious Spaghetti" />
          <Carousel.Caption>
            {/* <h3>In the spirit of Love</h3>
            <p>Love is the thread that weaves the fabric of our lives.” — Chinwe Queen</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img  className="d-block w-100" src={Spagetti} alt="Delicious Spaghetti" />
          <Carousel.Caption>
            <h3 className='text_banner'>Delicious Spaghetti</h3>
            <p className='text_banner'>“Cooking is like love. It should be entered into with abandon or not at all.” — Harriet Van Horne</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={1000}>
          <img  className="d-block w-100" src={BangaSoup} alt="Banga Soup" />
          <Carousel.Caption>
            <h3 className='text_banner'>Banga Soup</h3>
            <p className='text_banner'>“There is nothing like soup. It is by nature eccentric: no two are ever alike, unless of course you get your soup in a can.” — Laurie Colwin</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img  className="d-block w-100" src={FriedRice} alt="Fried Rice" />
          <Carousel.Caption>
            <h3 className='text_banner'>Fried Rice</h3>
            <p className='text_banner'>“People who love to eat are always the best people“ - Julia Child.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img  className="d-block w-100" src={foodtray} alt="Fried Rice" />
          <Carousel.Caption>
            <h3 className='text_banner'>Fried Rice</h3>
            <p className='text_banner'>“People who love to eat are always the best people“ - Julia Child.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={1000}>
          <img  className="d-block w-100" src={Fruit} alt="Fried Rice" />
          <Carousel.Caption>
            <h3 className='text_banner'>Fried Rice</h3>
            <p className='text_banner'>“People who love to eat are always the best people“ - Julia Child.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img  className="d-block w-100" src={Meal} alt="Fried Rice" />
          <Carousel.Caption>
            <h3 className='text_banner'>Fried Rice</h3>
            <p className='text_banner'>“People who love to eat are always the best people“ - Julia Child.</p>
          </Carousel.Caption>
        </Carousel.Item>
              </Carousel>
          </div>
    </div>
  )
}

export default Carosuel
