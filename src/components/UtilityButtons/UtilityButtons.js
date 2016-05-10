import React, { Component } from 'react';
import { connect } from 'react-redux';

class UtilityButtons extends Component {
    constructor(props) {
        super(props);
        this.changeTab = this.changeTab.bind(this);
        this.state = {
            details: 'faq-button selected',
            electric: 'faq-button',
            gas: 'faq-button',
            television: 'faq-button',
            water: 'faq-button'
        };

        if (this.props.selected) {
            this.state.details = 'faq-button';
            this.state[this.props.selected] = 'faq-button selected';
        }
    }

    changeTab(event) {
        const tabName = event.target.name;
        const path = '/sort-your-move/' + tabName;
        const currentState = this.state;
        event.preventDefault();
        for (const button in currentState) {
            if (button === tabName) {
                currentState[button] = 'faq-button selected';
            } else {
                currentState[button] = 'faq-button';
            }
        }
        this.setState(currentState);
        this.context.router.push(path);
    }


    render() {
        return (
            <div className="form-buttons">
              <button onClick={this.changeTab} name="details" className={this.state.details}>Details</button>
              <button onClick={this.changeTab} name="electric" className={this.state.electric}>Electric</button>
              <button onClick={this.changeTab} name="gas" className={this.state.gas}>Gas</button>
              <button onClick={this.changeTab} name="television" className={this.state.television}>Television</button>
              <button onClick={this.changeTab} name="water" className={this.state.water}>Water</button>
            </div>
        );
    }
}

UtilityButtons.propTypes = {
    selected: React.PropTypes.string
};

UtilityButtons.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { faqs: state.list.faqs };
}

export default connect(mapStateToProps)(UtilityButtons);
