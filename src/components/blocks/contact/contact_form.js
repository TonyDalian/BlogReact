import { Field, reduxForm } from 'redux-form';
import { I18n, Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { formSend } from '../../../action';

const validateName = value => {
	if (!value) {
		return I18n.t('form.error.name.blank');
	} else if (value.length < 3) {
		return I18n.t('form.error.name.length');
	}
};

const validateSubject = value => {
	if (!value) {
		return I18n.t('form.error.subject.blank');
	} else if (value.length < 3) {
		return I18n.t('form.error.subject.length');
	}
};

const validateEmail = value => {
	if (!value) {
		return I18n.t('form.error.email.blank');
	}
};

const validateMessage = value => {
	if (!value) {
		return I18n.t('form.error.message.blank');
	} else if (value.length < 10) {
		return I18n.t('form.error.message.length');
	}
};

const FIELDS = {
	name: {
		type: 'input',
		fieldType: 'text',
		label: 'name',
		validation: validateName
	},
	subject: {
		type: 'input',
		fieldType: 'text',
		label: 'subject',
		validation: validateSubject
	},
	email: {
		type: 'input',
		fieldType: 'email',
		label: 'email',
		validation: validateEmail
	},
	message: {
		type: 'textarea',
		fieldType: 'textarea',
		label: 'message',
		validation: validateMessage
	}
};

class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = { messages: {}, sending: false };
	}

	onSubmit(values) {
		if (!this.state.sending) {
			this.setState({ sending: true, messages: {} });
			this.props.formSend(values, (response) => this.handleFormPostResponse(response));
		}
	}

	onMessageCrossClick(id) {
		let messages = this.state.messages;
		messages = _.omit(messages, id);
		this.setState({ messages });
	}

	handleFormPostResponse(response) {
		const errors = response.data;

		const id = Math.floor(Math.random() * 1000000);
		const message = errors.length === 0 ?
			{ id, type: 'success' } :
			{ id, errors, type: 'error' }
		;

		const messages = this.state.messages;
		_.set(messages, id, message);
		this.setState({ messages, sending: false });

		if (errors.length === 0) this.props.reset();
	}

	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label htmlFor={field.name}><Translate value={`form.label.${field.label}`} /></label>
				<field.type
					className="form-control"
					placeholder={I18n.t(`form.ph.${field.label}`)}
					type={field.fieldType}
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	renderFields() {
		return _.map(FIELDS, (fieldConfig, fieldName) => 
			(
				<Field
					key={fieldName}
					name={fieldName}
					label={fieldConfig.label}
					type={fieldConfig.type}
					fieldType={fieldConfig.fieldType}
					component={this.renderField}
				/>
			)
		);
	}

	renderMessages() {
		return _.map(this.state.messages, message => {
			const content = message.type === 'success' ? 
				(<p><Translate value={`form.message.${message.type}.content`} /></p>) :
				_.map(message.errors, error => (
					<p><Translate value={`form.error.${error}`} /></p>
				))
			;

			return (
				<div key={message.id} className={`w3-panel w3-card-8 w3-${ message.type === 'success' ? 'green' : 'red'}`}>
					<span onClick={() => this.onMessageCrossClick(message.id)} className="w3-closebtn">&times;</span>
					<h3><Translate value={`form.message.${message.type}.header`} /></h3>
					{content}
				</div>
			);
		});
	}

	render() {
		const { handleSubmit } = this.props;

		const messages = this.renderMessages();
		const sending = this.state.sending ? (
			<div className="w3-panel w3-green w3-card-8">
				<p className="w3-margin-top"><Translate value={`form.sending`} /></p>
			</div>
		) : '';

		return (
			<div>
				{sending}
				{messages}
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					{this.renderFields()}
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}


function validate(values) {
	const errors = {};

	_.each(FIELDS, (config, field) => {
		errors[field] = config.validation(values[field]);
	});

	return errors;
}

const FormComponent = reduxForm({
	validate,
	form: 'ContactForm',
	fields: _.keys(FIELDS)
})(
	connect(null, { formSend })(ContactForm)
);

export default { form: FormComponent };
