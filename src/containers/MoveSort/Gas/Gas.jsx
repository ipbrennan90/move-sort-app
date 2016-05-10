import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../../components/Header/Header';
import UtilityButtons from '../../../components/UtilityButtons/UtilityButtons';
import UtilityForm from '../../../components/UtilityForm/UtilityForm';
require('../../../theme/global.scss');

class Gas extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const gasLogo = require('./Gas.png');
        return (
            <div className="home">
                <Helmet title="SortYourMove"/>
                <Header />
                <div className="container">
                    <UtilityButtons />
                </div>
                <div>
                    <UtilityForm formLogo={gasLogo} />
                </div>
            </div>
        );
    }
}

Gas.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ]),
    dispatch: React.PropTypes.func.isRequired,
    tab: React.PropTypes.number
};

Gas.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    return { tab: state.list.tab };
}

export default connect(mapStateToProps)(Gas);
