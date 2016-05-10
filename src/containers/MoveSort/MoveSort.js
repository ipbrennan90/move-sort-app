import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Pane from '../../components/Pane/Pane';
import Tabs from '../../components/Tabs/Tabs';
import Header from '../../components/Header/Header';
import UtilityForm from '../../components/UtilityForm/UtilityForm';
import UtilityButtons from '../../components/UtilityButtons/UtilityButtons';
import './MoveSort.scss';
import { selectTab } from '../../actions/index';
import { connect } from 'react-redux';


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
        const TVLogo = require('./TV.png');
        return (
            <div className={styles.home}>
                <Helmet title="SortYourMove"/>
                <Header />
                <div className="container">
                    <UtilityButtons />
                    <Tabs style={{ 'height': '100%' }} selected={this.state.activeTab ? this.state.activeTab : 0}>
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

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(MoveSort);
