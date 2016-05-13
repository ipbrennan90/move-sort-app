import React, { Component } from 'react';


export default class UtilityForm extends Component {

    constructor(props) {
        super(props);
        const { formNext } = this.props;
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            formNext
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
        const { formNext } = this.props;
        event.preventDefault();
        this.context.router.push('sort-your-move/' + formNext);
    }
    render() {
        require('./UtilityForm.scss');
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
    formLogo: React.PropTypes.string,
    formNext: React.PropTypes.string
};

UtilityForm.contextTypes = {
    router: React.PropTypes.object
};
