import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';

export default class Porfolio extends Component {
  
  render() {
    let photos = [photo1, photo2]
    return (
      
      <section id='photos'>
          <h1>Quelques images des précedentes marches.</h1>
        <Carousel id="carousel" showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} useKeyboardArrows={true} swipeable={true} >
          {
            photos.map((item)=>{
              return(
                <div style={{ paddingTop: 20, paddingBottom: 20, marginLeft: 250, width: 800, height: 'auto' }}>
                  <img  src={`${item}`} alt={`${item}`} className="item-img"/>
                </div>
              )
            })
          }
          </Carousel>
      </section>
  
        );
  }
}