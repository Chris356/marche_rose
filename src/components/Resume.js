import React, { Component } from 'react';
import MAP from '../images/map.jpg'
import Combourg from '../images/Combourg.jpg'

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
                <a href="https://zupimages.net/up/20/34/fr3k.jpg" target="blank"><img id='map' src={mappi} alt='mapParcours' /></a>
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
                <p className='orga'>Un ravitaillement sera offert lors de l'événement dans le respect des règles d'hygiène en vigueur.  <a href="https://zupimages.net/up/20/35/i8sq.jpg" target="blank">Voir les consignes d'hygiènes.</a></p>
                {resumeData.orga && resumeData.orga.map(item =>
                  <p className="orga">{item}</p>
                )}
              </div>
              <a href='https://www.helloasso.com/associations/rotary-dol-combourg/evenements/marche-rose' target='blank'><button className='inscButton'>Je m'inscris</button></a>
            </div>
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h2><span>Remerciement</span></h2>
          </div>

          <div className="nine columns main-col">


            <div className="skillsList">

              <p id='thx'>Remerciement à la municipalité de Combourg pour son aide, aux bénévoles, aux entreprises et bien sur à tout les participants ... </p>
              <img src={Combourg} alt='Combourg' id='Combourg'></img>

            </div>

          </div>
        </div>

      </section>
    );
  }
}