import React, { Component } from 'react';
// import Helmet from 'react-helmet';


class Pane extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<div> {this.props.children} </div>);
    }
}

Pane.propTypes = {
    children: React.PropTypes.element
};

export default Pane;
