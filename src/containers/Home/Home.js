import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './Home.scss';

export default class Home extends Component {

    constructor() {
        super();
        this.editPage = this.editPage.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.state = {
            pageText: '',
            adminEditing: false
        };
    }

    editPage(event) {
        this.setState({
            pageText: event.target.value
        });
    }

    toggleEdit(event) {
        event.preventDefault();
        console.log(event.target.innerHTML);
        this.setState({ adminEditing: !this.state.adminEditing, pageText: event.target.innerHTML });
    }
    render() {
        const styles = require('./Home.scss');
        // require the logo image both from client and server
        const logoImage = require('./logo.png');
        const pageText = this.state.pageText ? this.state.pageText : 'this is a small blurb about us';
        const adminInputDiv = this.state.adminEditing ? <textarea value={this.state.pageText} className='admin-edit-text' onChange={this.editPage} rows="20"></textarea> : '';
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

                <h2>Sorting Your Move For You</h2>

                <div className="home-button-container">
                  <button className="btn-primary home-button">Home</button>
                  <button className="btn-primary home-button">Moving Home Tips</button>
                  <button className="btn-primary home-button">FAQs</button>
                </div>
              </div>
            </div>
            <div className="home-page-contents">
                {adminInputDiv}
                <div className="home-page-contents-container">
                    <p onClick={this.toggleEdit}>{pageText}</p>
                </div>
            </div>

        </div>
    );
    }
}
