import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../../components/Header/Header';
import UtilityButtons from '../../../components/UtilityButtons/UtilityButtons';
require('../../../theme/global.scss');

class Television extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.router.push('sort-your-move/water');
    }


    componentDidMount() {
        this.refs.logoPng.className = 'utility-form__logo logo-visible';
    }

    changeImage() {
        console.log('called');
        this.refs.logoPng.className = 'utility-form__logo logo-hidden';
        this.refs.logoPng.className = 'utility-form__logo logo-visible';
    }

    render() {
        require('../MoveSort.scss');
        const TVLogo = require('./TV.png');
        return (
            <div className="home">
                <Helmet title="SortYourMove"/>
                <Header />
                <div className="container">
                    <UtilityButtons selected="television"/>
                </div>
                <div>
                    <div className="utility-form">
                        <div className="utility-form__logo logo-hidden" ref="logoPng">
                            <img src={TVLogo}/>
                        </div>
                        <button className="tv-button">Transfer TV License</button>
                        <button className="tv-button">Cancel TV License</button>
                        <button className="tv-button">Not Needed</button>
                        <button className="tv-button">Need TV License</button>
                        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

Television.propTypes = {
};

Television.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Television);
