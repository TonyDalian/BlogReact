import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import _ from 'lodash';

import { getProjects, getCategories } from '../action';

import LangRedirect from './redirect';

import Home from './pages/home';
import Menu from './layout/menu';
import Resume from './pages/resume';
import Header from './layout/header';
import Button from './layout/button';
import Footer from './layout/footer';
import Project from './pages/project';
import Loading from './pages/loading';
import Contact from './pages/contact';
import Category from './pages/category';
import Portfolio from './pages/portfolio';
import WorkInProgress from './pages/workinprogress';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = { showNav: false, showIntro: false };
		this.overlayOpen = this.overlayOpen.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.overlayClose = this.overlayClose.bind(this);
	}

	componentWillMount() {
		if (_.isEmpty(this.props.projects)) this.props.getProjects();
		if (_.isEmpty(this.props.categories)) this.props.getCategories();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	overlayOpen() {
		this.setState({ showNav: true });
	}

	overlayClose() {
		this.setState({ showNav: false });
	}

	handleScroll() {
		const showIntro = (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
		this.setState({ showIntro });
	}

	render() {
		if (_.isEmpty(this.props.projects) || _.isEmpty(this.props.categories)) {
			return <Loading />;
		}

		const menuButton = (
			<Button 
				overlayOpen={this.overlayOpen} 
				showIntro={this.state.showIntro} 
				title={this.props.title} 
			/>
		);

		return (
			<div>
				<Menu showNav={this.state.showNav} overlayClose={this.overlayClose} />
				<div className="w3-main">
					{menuButton}
					<Header />
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/home" />} />
						<Route path="/home" component={Home} />  
						<Route path="/projects/:slug" component={Project} />
						<Route path="/categories/:slug" component={Category} />  
						<Route path="/work-in-progress" component={WorkInProgress} /> 
						<Route path="/portfolio" component={Portfolio} />  
						<Route path="/resume" component={Resume} />  
						<Route path="/contact" component={Contact} />
						<Route path="/:lang/project/:slug" component={LangRedirect} />
						<Redirect to="/home" />  
					</Switch>
					<Footer />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ projects, categories, title }) {
	return { projects, categories, title };
}

export default connect(mapStateToProps, { getProjects, getCategories })(Layout);
