import React, { Component } from 'react';
require('./UtilityForm.scss');

export default class UtilityForm extends Component {

    constructor(props) {
        super(props);
        const { formFor } = this.props;
        this.state = {
            formFor
        };
    }

    componentDidMount() {
        this.refs.logoPng.className = 'utility-form__logo logo-visible';
    }

    changeImage() {
        console.log('called');
        this.refs.logoPng.className = 'utility-form__logo logo-hidden';
        this.refs.logoPng.className = 'utility-form__logo logo-visible';
    }

    submitForm(event) {
        event.preventDefault();
    }
    render() {
        const { formLogo } = this.props;

        return (
            <form className="utility-form">
                <div className="utility-form__logo logo-hidden" ref="logoPng">
                    <img src={formLogo}/>
                </div>
                <div className="input-container">
                    <span className="input-container__label">Move Out Supplier:</span><input type="text" className="utility-form__input"></input>
                </div>
                <div className="input-container">
                    <span className="input-container__label">Account Number:</span><input type="text" className="utility-form__input"></input>
                </div>
                <div className="input-container">
                    <span className="input-container__label">Move Out Read:</span><input type="text" className="utility-form__input"></input>
                </div>
                <div className="input-container">
                    <span className="input-container__label">Move In Supplier:</span><input type="text" className="utility-form__input"></input>
                </div>
                <div className="input-container">
                    <span className="input-container__label">Move In Read:</span><input type="text" className="utility-form__input"></input>
                </div>
                <button className="submit-button" onClick={this.submitForm.bind(this)}>Submit</button>
            </form>
        );
    }
}


UtilityForm.propTypes = {
    formFor: React.PropTypes.string,
    formLogo: React.PropTypes.string
};
