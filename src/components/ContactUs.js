import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
export default class ContactUs extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	handleSubmit(e) {
		e.preventDefault();
		const { name, email, subject, message } = this.state;
		let templateParams = {
			from_name: `${name}, ${email}`,
			to_name: 'marcherosecombourg@gmail.com',
			subject: subject,
			message_html: message
		};
		emailjs.send(
		'marche_rose_combourg', 
		'template_47Y4Wuwj', 
		templateParams, 
		'user_gd4DXRM7slYdtFoHSHONb'
		);
		this.resetForm();
		alert('Votre message a bien été envoyé');
	}
	resetForm() {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	}
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value });
	};
	render() {
		return (
			<section id="contact">
				<div className="row section-head">
					<div className="twelve columns">
						<h2 className="lead">N'hésitez pas à nous écrire pour toute question ou demande</h2>
						<br />
						<form onSubmit={this.handleSubmit.bind(this)}>
							<label className="text-muted">Nom</label>
							<input
								type="text"
								name="name"
								value={this.state.name}
								className="text-primary"
								onChange={this.handleChange.bind(this, 'name')}
								placeholder="Votre nom"
							/>
							<label className="text-muted">Adresse email </label>
							<input
								type="email"
								name="email"
								value={this.state.email}
								className="text-primary"
								onChange={this.handleChange.bind(this, 'email')}
								placeholder="Votre adresse email"
							/>
							<label className="text-muted">Sujet</label>
							<input
								type="text"
								name="subject"
								className="text-primary"
								value={this.state.subject}
								onChange={this.handleChange.bind(this, 'subject')}
								placeholder="Objet du contact"
							/>
							<label className="text-muted">Message</label>
							<textarea
								name="message"
								className="text-primary"
								placeholder="Votre message"
								value={this.state.message}
								onChange={this.handleChange.bind(this, 'message')}
							/>
							<button>Envoyer</button>
						</form>
						<h2 id="ou"> -- OU --</h2>
						<h5>Contactez par téléphone :</h5>
						<div className="contacts">
							<h4 className='telContact'>Mr Morvan Guy: <span>0680525209</span></h4>
							<h4 className='telContact'>Mr Péron Alain: <span>0603781929</span></h4>
						</div>

					</div>
				</div>
			</section>
		);
	}
}
