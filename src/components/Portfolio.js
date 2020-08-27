import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';


export default class Porfolio extends Component {

  render() {
    let photos = [photo1, photo2, photo4, photo5, photo6, photo7]
    return (

      <section id='photos'>
        <h1>Quelques images des précedentes marches.</h1>
        <div id="carousel">
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} useKeyboardArrows={true} swipeable={true} >
            {
              photos.map((item) => {
                return (
                  <div>
                    <img src={`${item}`} alt={`${item}`} className="item-img" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
      </section>

    );
  }
}