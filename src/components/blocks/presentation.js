import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Presentation extends Component {
    render() {
        return (
			<div>
				<div className="row w3-padding-xlarge">
					<div className="col-xs-12 col-md-7 col-lg-6 col-md-offset-5 col-lg-offset-4 text-center">
						<h1 style={{ color: '#3f51b5' }} ><Translate value="home.intro.title" /></h1>
					</div>
				</div>

				<div className="row w3-padding-xlarge">
					<div className="col-xs-12 col-md-5 col-lg-4">
						<h4><Translate value="home.intro.legends.0" /></h4>
						<div className="underline-small" />
					</div>
					<div className="col-xs-12 col-md-7 col-lg-offset-1 col-lg-6">
						<div className="row">
							<div className="col-xs-12 text-justify">
								<p><Translate value="home.intro.texts.0" /></p>
							</div>
						</div>
					</div>
				</div>

				<div 
					className="row me w3-padding-xlarge" 
					style={{ backgroundImage: 'url("/img/background/ruller.svg")' }}
				>
					<div className="col-xs-12 col-md-5 col-lg-4" style={{ paddingBottom: `${10}px` }}>
						<h2><Translate value="home.intro.legends.1" /></h2>
						<div className="underline-big" />
						<div className="row">
							<div className="col-xs-3">
								<Link to="/categories/web" >
									<img 
										alt="Web"
										className="img-responsive" 
										src="/bundles/pllcore/images/c/web.png" 
									/>
								</Link>
							</div>
							<div className="col-xs-3">
								<Link to="/categories/mobile" >
									<img 
										alt="Phone"
										className="img-responsive" 
										src="/bundles/pllcore/images/c/phone.png" 
									/>
								</Link>
							</div>
							<div className="col-xs-3">
								<Link to="/categories/software" >
									<img 
										alt="Software"
										className="img-responsive" 
										src="/bundles/pllcore/images/c/software.png" 
									/>
								</Link>
							</div>
							<div className="col-xs-3">
								<Link to="/categories/music" >
									<img 
										alt="Music"
										className="img-responsive" 
										src="/bundles/pllcore/images/c/music.png" 
									/>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-md-7 col-lg-offset-1 col-lg-6">
						<div className="row">
							<div className="col-xs-12 text-justify">
								<p><Translate value="home.intro.texts.1" /></p>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Presentation;
