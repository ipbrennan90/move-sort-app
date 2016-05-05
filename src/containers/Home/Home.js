import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Pane from '../../components/Pane/Pane';
import Tabs from '../../components/Tabs/Tabs';
import Faq from '../../components/Faq/Faq';
import MoveTips from '../../components/MoveTips/MoveTips';
import './Home.scss';
import { selectTab } from '../../actions/index';


class Home extends Component {

    constructor() {
        super();
        this.editPage = this.editPage.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.tabs = {
            'home': 0,
            'movingTips': 1,
            'FAQs': 2
        };
        this.state = {
            pageText: '',
            adminEditing: false,
            activeTab: 1
        };
    }

    editPage(event) {
        this.setState({
            pageText: event.target.value
        });
        console.log(this.state);
    }

    toggleEdit(event) {
        event.preventDefault();
        console.log(event.target.innerHTML);
        this.setState({ adminEditing: !this.state.adminEditing, pageText: event.target.innerHTML });
    }

    changeTab(event) {
        const tab = event.target.name;
        this.props.dispatch(selectTab(this.tabs[tab]));
        this.setState({ activeTab: this.tabs[tab] });
        console.log(this.state);
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
                  <button onClick={this.changeTab} name="home" className="btn-primary home-button">Home</button>
                  <button onClick={this.changeTab} name="movingTips" className="btn-primary home-button">Moving Home Tips</button>
                  <button onClick={this.changeTab} name="FAQs" className="btn-primary home-button">FAQs</button>
                </div>
              </div>
            </div>
            <Tabs selected={this.state.activeTab}>
                <Pane label="Home">
                    <div className="home-page-contents">
                        {adminInputDiv}
                        <div className="home-page-contents-container">
                            <p onClick={this.toggleEdit}>{pageText}</p>
                        </div>
                    </div>
                </Pane>
                <Pane label="Moving Home Tips">
                    <MoveTips />
                </Pane>
                <Pane label="FAQs">
                    <Faq />
                </Pane>
            </Tabs>
        </div>
        );
    }
}

Home.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ]),
    dispatch: React.PropTypes.func.isRequired,
    tab: React.PropTypes.number
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Home);
