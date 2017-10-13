import React, { Component } from 'react';

class Button extends Component {
    render() {
        let topClass = 'myTop w3-top w3-container w3-padding-16 w3-theme w3-large';
        let introClass = 'myIntro w3-hide';
        if (this.props.showIntro) {
            topClass += 'w3-card-4';
            introClass += 'w3-show-inline-block';
        }

        return (
            <div className={topClass} >
                <i 
                    className="
                        fa 
                        fa-bars 
                        w3-opennav 
                        w3-hide-large 
                        w3-xlarge 
                        w3-margin-left 
                        w3-margin-right
                    " 
                    onClick={this.props.overlayOpen}
                />
                <span className={introClass} >{ this.props.title }</span>
            </div>
        );
    }
}

export default Button;
