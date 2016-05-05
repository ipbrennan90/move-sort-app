import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTips } from '../../actions/index';
require('./MoveTips.scss');

class MoveTips extends Component {
    constructor(props) {
        super(props);
        // this._renderContent = this._renderContent.bind(this);
        this._renderTip = this._renderTip.bind(this);
        this._renderAdminInput = this._renderAdminInput.bind(this);
        this.editPage = this.editPage.bind(this);
        this.addNewMovingTip = this.addNewMovingTip.bind(this);
        this.state = {
            activeTip: 0,
            pageText: this.props.tips
                ? this.props.tips[0].content
                : 'These are our frequently asked questions, pick one from the left to view',
            adminEditing: false,
            addTip: false,
            movingTips: [
                {
                    key: 1,
                    title: 'Moving Tip 1',
                    name: 'FAQ 1',
                    content: 'this is faq 1, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 3',
                    content: 'this is faq 3, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 4',
                    content: 'this is faq 4, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 5',
                    content: 'this is faq 5, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 6',
                    content: 'this is faq 6, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 7',
                    content: 'this is faq 7, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 8',
                    content: 'this is faq 8, click on my text to edit me'
                }, {
                    key: 2,
                    name: 'FAQ 9',
                    content: 'this is faq 9, click on my text to edit me'
                }
            ]
        };
        if (this.props.tips) {
            this.state.pageText = this.props.tips[0].content;
        }
        // console.log(this.state);
    }

    changeTab(index, event) {
        event.preventDefault();
        this.setState({ activeFaq: index, pageText: this.state.movingTips[index].content });
    }

    editPage(event) {
        this.setState({ pageText: event.target.value });
        console.log(this.state);
    }

    _renderTip() {
        const movingTips = this.props.tips
            ? this.props.tips
            : this.state.movingTips;
        function buttons(child, index) {
            return (
                <div key={index}>
                    <button className='faq-button' onClick={this.changeTab.bind(this, index)}>
                        {child.name}
                    </button>
                </div>
            );
        }
        return (
            <div>
                {movingTips.map(buttons.bind(this))}
            </div>
        );
    }

    _renderAdminInput(pageText) {
        if (this.state.adminEditing) {
            return (
                <textarea value={pageText} className='admin-edit-text' onChange={this.editPage} rows="20"></textarea>
            );
        } else if (this.state.addTip) {
            return (
                <div>
                    <input type="text" ref="tipTitle"></input>
                    <input type="date" ref="tipDate"></input>
                    <textarea value={pageText} className='admin-edit-text' onChange={this.editPage} rows="20"></textarea>
                    <button>Submit New Tip</button>
                </div>

            );
        }
        return '';
    }

    addNewMovingTip(event) {
        event.preventDefault();
        console.log('adding tip');
        this.setState({ adminEditing: false, addTip: true });
    }

    toggleEdit(event) {
        event.preventDefault();
        console.log('here setting adminEditing');
        this.setState({
            adminEditing: !this.state.adminEditing
        });
        if (this.state.adminEditing) {
            console.log('here');
            this.state.movingTips[this.state.activeTip].content = this.state.pageText;
            this.props.dispatch(setTips(this.state.movingTips));
        }
    }

    render() {
        const pageText = this.state.pageText;
        const adminInputDiv = this._renderAdminInput(pageText);
        return (
            <div>
                <div className="container">
                    <div className="faq-tab-buttons">
                        {this._renderTip()}
						<button onClick={this.addNewMovingTip}>Add Tip</button>
                    </div>
                    <div className="home-page-contents faq">
                        {adminInputDiv}
                        <div className="home-page-contents-container faq">
                            <p onClick={this.toggleEdit.bind(this)}>{pageText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MoveTips.propTypes = {
    children: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    tips: React.PropTypes.array
};

function mapStateToProps(state) {
    return { tips: state.list.tips };
}

export default connect(mapStateToProps)(MoveTips);
