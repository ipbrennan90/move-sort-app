import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
                  <Link to="/home?open=home"><button className="btn-primary home-button">Home</button></Link>
                  <Link to="/home?open=movingTips"><button className="btn-primary home-button">Moving Home Tips</button></Link>
                  <Link to="/home?open=FAQs"><button className="btn-primary home-button">FAQs</button></Link>
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

Header.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { faqs: state.list.faqs };
}

export default connect(mapStateToProps)(Header);
