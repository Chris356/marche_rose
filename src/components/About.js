import React, { Component } from 'react';
import Logo from '../images/rotaryLogo.png';
import LogoLigue from '../images/logoligue.png';
import district from '../images/district.jpg';
import Noeud from '../images/noeud.png'
export default class About extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
				<img src={district} alt="district" id='district'></img>
				<div className="title">
					<h1 id="titleColor">A propos</h1>
				</div>

				<div className="row slide" id="first-slide">
					<div className="three columns" id='logos'>
						<img className="profile-pic one columns" src={Logo} alt="" />
						<img className="profile-pic one columns" src={Noeud} alt="" />
						<img className="profile-pic one columns" id='Logo' src={LogoLigue} alt="" />
					</div>

					<div className="nine columns main-col">
						<h2>Le Rotary Club Combourg, Dol-de-Bretagne</h2>
						{resumeData.aboutrotary.map(item => <p className="descrip">{item}&nbsp;</p>)}
						<h2>La Marche Rose</h2>
						{resumeData.marche.map(item => <p className="adress">{item}&nbsp;</p>)}
						<h2>La Ligue contre le cancer</h2>
						<p className="address">{resumeData.ligue.desc}</p><a href={resumeData.ligue.url} target="blank"><button>le site de la ligue</button></a>
					</div>
				</div>
			</section>
		);
	}
}
