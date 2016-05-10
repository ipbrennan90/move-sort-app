import React, { Component } from 'react';
import { connect } from 'react-redux';

class UtilityButtons extends Component {
    constructor(props) {
        super(props);
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(event) {
        const tabName = event.target.name;
        const path = '/sort-your-move/' + tabName;
        event.preventDefault();
        this.context.router.push(path);
    }


    render() {
        return (
            <div className="form-buttons">
              <button onClick={this.changeTab} name="details" className="faq-button">Details</button>
              <button onClick={this.changeTab} name="electric" className="faq-button">Electric</button>
              <button onClick={this.changeTab} name="gas" className="faq-button">Gas</button>
              <button onClick={this.changeTab} name="television" className="faq-button">Television</button>
              <button onClick={this.changeTab} name="water" className="faq-button">Water</button>
            </div>
        );
    }
}

UtilityButtons.propTypes = {
    children: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    faqs: React.PropTypes.array
};

UtilityButtons.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { faqs: state.list.faqs };
}

export default connect(mapStateToProps)(UtilityButtons);
