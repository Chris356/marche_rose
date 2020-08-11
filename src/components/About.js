import React, { Component } from 'react';
import Logo from '../images/rotaryLogo.png';
export default class About extends Component {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
				<div className="title">
					<h1 id="titleColor">A propos</h1>
				</div>

				<div className="row slide" id="first-slide">
					<div className="three columns">
						<img className="profile-pic one columns" src={Logo} alt="" />
					</div>

					<div className="nine columns main-col">
						<h2>Le rotary club Combourg, Dol-de-Bretagne</h2>
						<p>{resumeData.aboutrotary}</p>
						<h2>La marche rose</h2>
						<p className="address">{resumeData.marche}</p>
					</div>
				</div>
			</section>
		);
	}
}
