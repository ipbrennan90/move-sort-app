import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../../components/Header/Header';
import UtilityButtons from '../../../components/UtilityButtons/UtilityButtons';
import UtilityForm from '../../../components/UtilityForm/UtilityForm';
require('../../../theme/global.scss');

class Electric extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        require('../MoveSort.scss');
        const electricLogo = require('./Electricity.png');
        return (
            <div className="home">
                <Helmet title="SortYourMove"/>
                <Header />
                <div className="container">
                    <UtilityButtons selected="electric" />
                </div>
                <div>
                    <UtilityForm formLogo={electricLogo} formNext="gas" />
                </div>
            </div>
        );
    }
}

Electric.propTypes = {
};

Electric.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Electric);
