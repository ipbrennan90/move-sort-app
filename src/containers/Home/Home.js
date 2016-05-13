import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Pane from '../../components/Pane/Pane';
import Tabs from '../../components/Tabs/Tabs';
import Faq from '../../components/Faq/Faq';
import MoveTips from '../../components/MoveTips/MoveTips';
import { selectTab } from '../../actions/index';


class Home extends Component {

    constructor(props) {
        super(props);
        const { location } = this.props || null;
        let queryTab;
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
        if (location && location.query) {
            queryTab = location.query.open;
            this.state.activeTab = this.tabs[queryTab];
            this.props.dispatch(selectTab(this.tabs[queryTab]));
        }
    }

    componentWillMount() {
        const items = document.getElementsByTagName('*');
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = '#00A79D';
        }
    }

    componentWillUnmount() {
        const items = document.getElementsByTagName('*');
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = 'white';
        }
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

    startMove(event) {
        event.preventDefault();
        this.context.router.push('/sort-your-move');
    }

    render() {
        const styles = require('./Home.scss');
        const { location } = this.props;
        const logoImage = require('./logo.png');
        const pageText = 'this is a small blurb about us';
        const adminInputDiv = this.state.adminEditing ? <textarea value={this.state.pageText} className='admin-edit-text' onChange={this.editPage} rows="20"></textarea> : '';
        let activeTab = 0;
        require('./Home.scss');
        console.log(location);
        if (location && location.query) {
            activeTab = this.tabs[location.query.open];
            console.log(activeTab, location.query.open);
        }
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
                <h2>Settle In Sooner</h2>

                <div className="home-button-container">
                  <button onClick={this.changeTab} name="home" className="btn-primary home-button">Home</button>
                  <button onClick={this.changeTab} name="movingTips" className="btn-primary home-button">Moving Home Tips</button>
                  <button onClick={this.changeTab} name="FAQs" className="btn-primary home-button">FAQs</button>
                </div>
              </div>
            </div>
            <Tabs selected={this.state.activeTab ? this.state.activeTab : activeTab}>
                <Pane label="Home">
                    <div className="home-page-contents">
                        {adminInputDiv}
                        <h2 style={{ 'text-align': 'center' }}>Welcome to MoveSort</h2>
                        <div className="home-page-contents-container" style={{ 'textAlign': 'center' }}>
                            <p onClick={this.toggleEdit}>{pageText}</p>
                        </div>
                        <button className="faq-button" style={{ 'marginTop': '1em' }} onClick={this.startMove.bind(this)}>Start Move</button>
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
    location: React.PropTypes.object,
    tab: React.PropTypes.number
};

Home.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Home);
