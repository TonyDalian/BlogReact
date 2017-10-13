import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Translate, setLocale } from 'react-redux-i18n';

class LangRedirect extends React.Component {
	componentWillMount() {
		const lang = this.props.match.params.lang === 'fr' ? 'fr' : 'en';
		const slug = this.props.match.params.slug;

		this.props.setLocale(lang);
		this.props.history.push(`/projects/${slug}`);
	}

	render() {
		const slug = this.props.match.params.slug;
		
		return (
			<div className="w3-white">
				<div className="home">
					<div className="row w3-padding-xlarge">
						<div className="col-xs-12 text-center">
							<p><Translate className="name" value="redirect.title" /></p>
							<Link to={`/projects/${slug}`}>
								<Translate className="name" value="redirect.button" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} 
}

export default connect(null, { setLocale })(LangRedirect);
