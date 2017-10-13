import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';

import ContactForm from './contact_form';

class ContactBlock extends Component {
	render() {
		return (
			<div className="row contact w3-light-blue w3-padding-xlarge">
				<div className="col-xs-12 col-md-5 col-lg-4">
					<h1><Translate value='contact.title' /><br /><Translate value='contact.subtitle' /></h1>
					<div className="underline-big" />
					<dl>
						<dt><Translate value='contact.legend.name' /></dt>
						<dd><Translate value='contact.content.name' /></dd>
						<dt><Translate value='contact.legend.city' /></dt>
						<dd><Translate value='contact.content.city' /></dd>
						<dt><Translate value='contact.legend.mail' /></dt>
						<dd><a href="mailto:hello@pierrelouislegrand.fr">hello@pierrelouislegrand.fr</a></dd>
					</dl>
				</div>
				<div className="col-xs-12 col-md-7 col-lg-8">
					<ContactForm.form />
				</div>
			</div>
		);
	}
}

export default ContactBlock;
