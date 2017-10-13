import { Translate, setLocale } from 'react-redux-i18n';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadProject, clearProject } from '../../action'; 

class Header extends Component {
    constructor(props) {
        super(props);

        this.changeLocale = this.changeLocale.bind(this);
    }

    changeLocale() {
        const target = this.props.locale === 'en' ? 'fr' : 'en';
        this.props.setLocale(target);

        const slug = this.props.project.slug;
        if (slug !== '') {
            this.props.clearProject();
            this.props.loadProject(slug, target);
        }
    }

    render() {
        const flag = 
            this.props.locale === 'en' ?
            <img src="/bundles/pllcore/images/lang/fr.png" alt="Français" /> :
            <img src="/bundles/pllcore/images/lang/en.png" alt="English" />
        ;

        return (
            <header className="header w3-container w3-theme w3-padding-32">
                <div className="header-middle">
                    <img 
                        className="img-circle" 
                        src="/bundles/pllcore/images/background/white.png" 
                        alt="Pierre-Louis Legrand" 
                    />
                    <img 
                        className="img-circle me" 
                        src="/bundles/pllcore/images/cv/photo.jpg" 
                        alt="Pierre-Louis Legrand" 
                    />
                    <div className="title">
                        <p className="infos">
                            <Translate className="name" value="header.title" /><br />
                            <em><Translate className="caption" value="header.subtitle" /></em>
                        </p>
                        <Link className="home" to="/">
                            <img src="/bundles/pllcore/images/home.png" alt="Home" />
                        </Link>
                        <button className="flag" onClick={this.changeLocale}>
                            {flag}
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps({ i18n, project }) {
    const locale = i18n.locale;
    return { locale, project };
}

export default connect(mapStateToProps, { loadProject, clearProject, setLocale })(Header);
