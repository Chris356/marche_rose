import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-unwrap" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
               <li><a className="smoothscroll" href="#about">A propos</a></li>
             <li><a className="smoothscroll" href="#resume">Détails</a></li>
               <li><a className="smoothscroll" href="#photos">Photos</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               <li><a className="smoothscroll" href="#contact">Inscription</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}.</h1>
              <h2 style={{ color: 'whitesmoke', textShadow: ' -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black', fontFamily:'sans-serif '}}>Organisée le {resumeData.date}<br/>Par le {resumeData.roleDescription}
               </h2>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                          <li key={item.name}>
                            <a href={item.url} target="blank"><i className={item.className}></i></a>
                          </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}