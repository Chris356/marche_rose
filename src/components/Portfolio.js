import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Porfolio extends Component {
  
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      
      <section id='photos'>
          <h1>Quelques images des précedentes marches.</h1>
            <Carousel  showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} useKeyboardArrows={true} swipeable={true} >
          {
            resumeData.photos && resumeData.photos.map((item)=>{
              return(
                <div >
                  <img  src={`${item.imgurl}`} alt={item.name} className="item-img"/>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
          </Carousel>
      </section>
  
        );
  }
}