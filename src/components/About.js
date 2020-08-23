import React, { Component } from 'react';
import Logo from '../images/rotaryLogo.png';
import LogoLigue from '../images/logoligue.png';
import district from '../images/district.jpg'
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
						<img className="profile-pic one columns" id='Logo' src={LogoLigue} alt="" />
					</div>

					<div className="nine columns main-col">
						<h2>Le Rotary Club Combourg, Dol-de-Bretagne</h2>
						<p>{resumeData.aboutrotary}</p>
						<h2>La Marche Rose</h2>
						<p className="address">{resumeData.marche}</p>
						<h2>La Ligue contre le cancer</h2>
						<p className="address">{resumeData.ligue.desc}</p><a href={resumeData.ligue.url} target="blank"><button>le site de la ligue</button></a>
					</div>
				</div>
			</section>
		);
	}
}
