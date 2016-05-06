import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import Helmet from 'react-helmet';


class Tabs extends Component {
    constructor(props) {
        super(props);
        this._renderContent = this._renderContent.bind(this);
        this.state = {
            selected: this.props.selected
        };
        console.log(this.state);
    }

    selectTab(tab) {
        this.setState({ selected: tab });
    }

    _renderContent() {
        console.log(this.props.tab);
        const selectedTab = this.props.tab ? this.props.tab : 0;
        console.log(selectedTab);
        return (
            <div className="tabs-content">
                {this.props.children[selectedTab]}
            </div>
        );
    }

    render() {
        return (
            <div className="tabs">
                {this._renderContent()}
            </div>
        );
    }
}
Tabs.propTypes = {
    children: PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ]),
    dispatch: React.PropTypes.func.isRequired,
    selected: PropTypes.number,
    tab: React.PropTypes.number
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Tabs);
