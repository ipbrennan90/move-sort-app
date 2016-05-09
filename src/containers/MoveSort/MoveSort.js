import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Pane from '../../components/Pane/Pane';
import Tabs from '../../components/Tabs/Tabs';
import UtilityForm from '../../components/UtilityForm/UtilityForm';
import './MoveSort.scss';
import { selectTab } from '../../actions/index';


class MoveSort extends Component {

    constructor(props) {
        super(props);
        this.editPage = this.editPage.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.changePage = this.changePage.bind(this);
        this.tabs = {
            'Details': 0,
            'Electric': 1,
            'Gas': 2,
            'Television': 3,
            'Water': 4
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

    submitForm(event) {
        event.preventDefault();
    }

    changePage(event) {
        const queryParam = event.target.name;
        const path = '/home?open=' + queryParam;
        event.preventDefault();
        this.context.router.push(path);
    }

    render() {
        const styles = require('./MoveSort.scss');
        const waterLogo = require('./Water.png');
        const gasLogo = require('./Gas.png');
        const electricLogo = require('./Electricity.png');
        const TVLogo = require('./TV.png');
        const logoImage = require('./logo.png');
        return (
            <div className={styles.home}>
                <Helmet title="SortYourMove"/>
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
                <div className="container">
                    <div className="form-buttons">
                      <button onClick={this.changeTab} name="Details" className="faq-button">Details</button>
                      <button onClick={this.changeTab} name="Electric" className="faq-button">Electric</button>
                      <button onClick={this.changeTab} name="Gas" className="faq-button">Gas</button>
                      <button onClick={this.changeTab} name="Television" className="faq-button">Television</button>
                      <button onClick={this.changeTab} name="Water" className="faq-button">Water</button>
                    </div>
                    <Tabs style={{ 'height': '100%' }} selected={this.state.activeTab ? this.state.activeTab : 0}>
                        <Pane label="Details">
                            <form className="utility-form">
                                <div className="utility-form__header">
                                    <h1 className="utility-form__header-text">Your Details</h1>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">Name:</span><input type="text" className="utility-form__input"></input>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">DOB:</span><input type="date" className="utility-form__input"></input>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">Email:</span><input type="text" className="utility-form__input"></input>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">Phone:</span><input type="text" className="utility-form__input"></input>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">Move From:</span><input type="text" className="utility-form__input"></input>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">Move To:</span><input type="text" className="utility-form__input"></input>
                                </div>
                                <div className="input-container">
                                    <span className="input-container__label">Move Date:</span><input type="date" className="utility-form__input"></input>
                                </div>
                                <button className="submit-button" onClick={this.submitForm.bind(this)}>Submit</button>
                            </form>
                        </Pane>
                        <Pane label="Electric">
                            <div>
                                <UtilityForm formLogo={electricLogo} />
                            </div>
                        </Pane>
                        <Pane label="Gas">
                            <div>
                                <UtilityForm formLogo={gasLogo} />
                            </div>
                        </Pane>
                        <Pane label="Television">
                            <div>
                                <div className="utility-form">
                                    <div className="utility-form__logo logo-visible" ref="logoPng">
                                        <img src={TVLogo}/>
                                    </div>
                                    <button className="tv-button" onClick={this.submitForm.bind(this)}>Transfer TV License</button>
                                    <button className="tv-button" onClick={this.submitForm.bind(this)}>Cancel TV License</button>
                                    <button className="tv-button" onClick={this.submitForm.bind(this)}>Not Needed</button>
                                    <button className="tv-button" onClick={this.submitForm.bind(this)}>Need TV License</button>
                                    <button className="submit-button" onClick={this.submitForm.bind(this)}>Submit</button>
                                </div>
                            </div>
                        </Pane>
                        <Pane label="Water">
                            <div>
                                <UtilityForm formLogo={waterLogo} />
                            </div>
                        </Pane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

MoveSort.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ]),
    dispatch: React.PropTypes.func.isRequired,
    tab: React.PropTypes.number
};

MoveSort.contextTypes = {
    router: React.PropTypes.object
};


export default MoveSort;
