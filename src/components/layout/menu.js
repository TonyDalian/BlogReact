import { Translate } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { loadProject, clearProject } from '../../action';
import { FilterPosts, MENU } from '../../helpers/project_selector';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: false,
            categories: false
        };

        this.onCategoriesClick = this.onCategoriesClick.bind(this);
        this.onProjectsClick = this.onProjectsClick.bind(this);
    }

    onCategoriesClick() {
        this.setState({ categories: !this.state.categories });
    }

    onProjectsClick() {
        this.setState({ projects: !this.state.projects });
    }

    renderCategoriesList() {
        return _.map(this.props.categories, category => (
            <Link 
                key={category.id} 
                to={`/categories/${category.slug}`}
            ><Translate value={`category.${category.slug}.title`} /></Link>
        ));
    }

    renderProjectsList() {
        return _.map(this.props.projects, project => (
            <Link 
                key={project.id} 
                to={`/projects/${project.slug}`}
            ><Translate value={`project.${project.slug}.name`} /></Link>
        ));
    }

    render() {
        const projects = this.renderProjectsList();
        const categories = this.renderCategoriesList();

        const base = 'w3-accordion-content w3-animate-left w3-padding';
        const categoriesClass = this.state.categories ? `${base} w3-show` : `${base}`;
        const projectsClass = this.state.projects ? `${base} w3-show` : `${base}`;
        const cCarret = this.state.categories ? 'fa-caret-down' : 'fa-caret-right';
        const pCarret = this.state.projects ? 'fa-caret-down' : 'fa-caret-right';

        const overlayStyle = this.props.showNav ? { display: 'block' } : { display: 'none' };

        return (
            <div>
                <nav 
                    style={overlayStyle}
                    className="main-nav 
                        w3-sidenav 
                        w3-animate-left 
                        w3-card-2 
                        w3-theme-d4 
                        w3-rightbar 
                        w3-border-white 
                        w3-collapse
                    " 
                >
                    <div className="w3-border-bottom w3-large w3-row">
                        <a 
                            className="rs-link w3-col w3-center w3-padding-small" 
                            href="https://github.com/Kishlin" 
                            rel='noopener noreferrer'
                            target="_blank"
                        >
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a 
                            className="rs-link w3-col w3-center w3-padding-small" 
                            href="https://www.linkedin.com/in/pierrelouislegrand2" 
                            rel='noopener noreferrer'
                            target="_blank"
                        >
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                    </div>
                    <button 
                        onClick={this.props.overlayClose}
                        className="w3-hover-white w3-text-red w3-hide-large w3-closenav w3-large"
                    >
                        <Translate value="menu.close" /> <i className="fa fa-remove" />
                    </button>
                    <Link to="/home"><Translate value="menu.home" /></Link>
                    <div className="w3-accordion">
                        <button 
                            ref="menuProjects" 
                            className="menu-dd" 
                            onClick={this.onProjectsClick} 
                        >
                            <Translate value="menu.projects" /> <i className={`fa ${pCarret}`} />
                        </button>
                        <div 
                            id="projects" 
                            className={projectsClass}
                        >
                            {projects}
                        </div>
                    </div>
                    <div className="w3-accordion">
                        <button 
                            ref="menuCategories" 
                            className="menu-dd" 
                            onClick={this.onCategoriesClick}
                        >
                            <Translate value="menu.categories" /> <i className={`fa ${cCarret}`} />
                        </button>
                        <div 
                            id="categories" 
                            className={categoriesClass}
                        >
                            {categories}
                        </div>
                    </div>
                    <Link to="/work-in-progress"><Translate value="menu.wip" /></Link>
                    <Link to="/portfolio"><Translate value="menu.portfolio" /></Link>
                    <Link to="/resume"><Translate value="menu.resume" /></Link>
                    <Link to="/contact"><Translate value="menu.contact" /></Link>
                </nav>

                <div
                    className="pointer w3-overlay w3-hide-large w3-animate-opacity"
                    style={overlayStyle}
                />
            </div>
        );
    }
}

function mapStateToProps({ projects, categories, i18n, project }) {
    const locale = i18n.locale;
    const menuProjects = FilterPosts(projects, MENU);
    return { projects: menuProjects, categories, locale, project };
}

export default connect(mapStateToProps, { loadProject, clearProject })(Menu);
