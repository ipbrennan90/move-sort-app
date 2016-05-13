import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../../components/Header/Header';
import UtilityButtons from '../../../components/UtilityButtons/UtilityButtons';
require('../../../theme/global.scss');

class Details extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.context.router.push('sort-your-move/electric');
    }

    render() {
        require('../Movesort.scss');
        require('./Details.scss');
        return (
            <div className="home">
                <Helmet title="SortYourMove"/>
                <Header />
                <div className="container">
                    <UtilityButtons />
                </div>
                <div>
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
                        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

Details.propTypes = {
};

Details.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Details);
