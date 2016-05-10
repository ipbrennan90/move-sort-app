import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    changePage(event) {
        const queryParam = event.target.name;
        const path = '/home?open=' + queryParam;
        event.preventDefault();
        this.context.router.push(path);
    }


    render() {
        const logoImage = require('./logo.png');
        return (
            <div className="masthead">
              <div className="container">
                <div className="logo">
                  <p>
                    <img src={logoImage}/>
                  </p>
                </div>
                <h2>Settle In Sooner</h2>

                <div className="home-button-container">
                  <button onClick={this.changePage} name="home" className="btn-primary home-button">Home</button>
                  <button onClick={this.changePage} name="movingTips" className="btn-primary home-button">Moving Home Tips</button>
                  <button onClick={this.changePage} name="FAQs" className="btn-primary home-button">FAQs</button>
                </div>
              </div>
            </div>
        );
    }
}

Header.propTypes = {
    children: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    faqs: React.PropTypes.array
};

function mapStateToProps(state) {
    return { faqs: state.list.faqs };
}

export default connect(mapStateToProps)(Header);
