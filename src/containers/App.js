import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';


const App = React.createClass({
    displayName: 'App',

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    },

    propTypes: {
        children: PropTypes.object.isRequired
    }
});

function select(state) {
    return state;
}

export default connect(select, { pushState })(App);
