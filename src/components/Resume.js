import React, { Component } from 'react';
import MAP from '../images/map.png'

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    const mappi = MAP
    return (
      <section id="resume">
        <div className="title">
          <h1 id="titleColor">Détails</h1>
        </div>

        <div className="row education">

          <div className="three columns header-col">
            <h2><span>Le parcours</span></h2>
          </div>
          <br />
          <div className="nine columns main-col">
            <div className="row item">
              <div className="five columns">
                <img id='map' src={mappi} alt='mapParcours' />
              </div>
              <div className="four columns">
                {resumeData.parcours && resumeData.parcours.map(item =>
                  <p className="info">{item}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h2><span>Organisation</span></h2>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {resumeData.orga && resumeData.orga.map(item =>
                  <p className="orga">{item}</p>
                )}
              </div>
              <a href='https://www.helloasso.com/associations/rotary-dol-
combourg/evenements/marche-rose' target='blank'><button className='inscButton'>Je m'inscris</button></a>
            </div>
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h2><span>Sponsors</span></h2>
          </div>

          <div className="nine columns main-col">


            <div className="skillsList">

              {
                resumeData.sponsors && resumeData.sponsors.map((item) => {
                  return (
                    <a className="skillItem" target="blank" href={`${item.url}`} >
                      <img className='skilllogo' src={`${item.logo}`} alt={item.skillname} />
                      <p align='center'>{item.skillname}</p>
                    </a>
                  )
                })
              }


            </div>

          </div>
        </div>

      </section>
    );
  }
}