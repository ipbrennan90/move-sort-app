import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './Home.scss';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className="masthead">
          <div className="container">
            <div className="logo">
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>Move Sort</h1>

            <h2>Description</h2>

            <div className="home-button-container">
              <button className="btn-primary home-button">Home</button>
              <button className="btn-primary home-button">Moving Home Tips</button>
              <button className="btn-primary home-button">FAQs</button>
            </div>
          </div>
        </div>
	</div>
    );
  }
}
