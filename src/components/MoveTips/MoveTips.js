import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setTips } from '../../actions/index';
require('./MoveTips.scss');

class MoveTips extends Component {
    constructor(props) {
        super(props);
        // this._renderContent = this._renderContent.bind(this);
        this._renderTip = this._renderTip.bind(this);
        this._renderAdminInput = this._renderAdminInput.bind(this);
        this.editPage = this.editPage.bind(this);
        this.addNewMovingTip = this.addNewMovingTip.bind(this);
        this.createNewTip = this.createNewTip.bind(this);
        this.saveTip = this.saveTip.bind(this);
        this.state = {
            activeTip: 0,
            pageText: this.props.tips
                ? this.props.tips[0].content
                : 'These are our frequently asked questions, pick one from the left to view',
            adminEditing: false,
            addTip: false,
            movingTips: [
                {
                    name: 'Move a fridge',
                    date: '2015-05-30',
                    content: 'this is moving tip 1, click on my text to edit me'
                }, {
                    name: 'Move a Piano',
                    date: '2015-05-30',
                    content: 'this is moving tip 3, click on my text to edit me'
                }, {
                    name: 'Move an Animal',
                    date: '2015-05-30',
                    content: 'this is moving tip 4, click on my text to edit me'
                }, {
                    name: 'Move your Parents',
                    date: '2015-05-30',
                    content: 'this is moving tip 5, click on my text to edit me'
                }, {
                    name: 'Move your girlfriend',
                    date: '2015-05-30',
                    content: 'this is moving tip 6, click on my text to edit me'
                }, {
                    name: 'Move Nice Furniture',
                    date: '2015-05-30',
                    content: 'this is moving tip 7, click on my text to edit me'
                }, {
                    name: 'Move an automobile',
                    date: '2015-05-30',
                    content: 'this is moving tip 8, click on my text to edit me'
                }, {
                    name: 'Move a road bike',
                    date: '2015-05-30',
                    content: 'this is moving tip 9, click on my text to edit me'
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
        this.setState({
            activeTip: index,
            addTip: false,
            adminEditing: false,
            pageText: this.state.movingTips[index].content,
            pageTitle: this.state.movingTips[index].name,
            pageDate: this.state.movingTips[index].date
        });
    }

    editPage(event) {
        this.setState({ pageText: event.target.value });
        console.log(this.state);
    }

    _renderTip() {
        const movingTips = this.state.movingTips;
        console.log(movingTips);
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
                <div>
                    <input className='admin-edit-text title' placeholder="Enter Title" type="text" ref="tipName"></input>
                    <input type="date" ref="tipDate"></input>
                    <textarea value={pageText} className='admin-edit-text' onChange={this.editPage} ref="tipContent" rows="20"></textarea>
                    <button onClick={this.saveTip} className="faq-button">Save Moving Tip</button>
                </div>
            );
        } else if (this.state.addTip) {
            return (
                <div>
                    <input className='admin-edit-text title' placeholder="Enter Title" type="text" ref="tipName"></input>
                    <input type="date" ref="tipDate"></input>
                    <textarea placeholder="Enter your movingt tip content here" ref="tipContents" className='admin-edit-text' rows="20"></textarea>
                    <button onClick={this.createNewTip} className="faq-button">Submit New Tip</button>
                </div>

            );
        }
        return '';
    }

    addNewMovingTip(event) {
        event.preventDefault();
        this.setState({
            adminEditing: false,
            addTip: true
        });
    }

    toggleEdit(event) {
        event.preventDefault();
        this.setState({
            adminEditing: !this.state.adminEditing
        });
    }

    createNewTip(event) {
        event.preventDefault();
        const newTip = {
            name: this.refs.tipName.value,
            date: this.refs.tipDate.value,
            content: this.refs.tipContents.value
        };
        this.setState({ movingTips: [...this.state.movingTips, newTip], addTip: false });
        const newTipIndex = this.state.movingTips.length - 1;
        this.setState({ activeTip: newTipIndex });
    }

    saveTip(event) {
        event.preventDefault();
        const tip = this.state.movingTips[this.state.activeTip];
        console.log(tip);
        tip.content = this.refs.tipContent.value;
        tip.name = this.refs.tipName.value;
        tip.date = this.refs.tipDate.value;
        this.setState({ movingTips: this.state.movingTips, adminEditing: false });
    }

    render() {
        const pageText = this.state.pageText;
        const pageTitle = this.state.pageTitle;
        const pageDate = this.state.pageDate;
        const adminInputDiv = this._renderAdminInput(pageText);
        const homePageContentsStyle = this.state.addTip || this.state.adminEditing ? 'hidden' : 'home-page-contents-container faq visible';
        const hidableContents = this.state.addTip || this.state.adminEditing ? 'hidden' : 'visible';
        return (
            <div>
                <div className="container">
                    <div className="faq-tab-buttons">
                        {this._renderTip()}
						<button className="faq-button" onClick={this.addNewMovingTip}>Add Tip</button>
                    </div>
                    <div className="home-page-contents faq">
                        {adminInputDiv}
                        <h3 className={hidableContents}>{pageTitle}</h3>
                        <p className={hidableContents}>{pageDate}</p>
                        <div className={homePageContentsStyle}>
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
    setTips: React.PropTypes.func,
    tips: React.PropTypes.array
};

function mapStateToProps(state) {
    return { tips: state.list.tips };
}

export default connect(mapStateToProps)(MoveTips);
