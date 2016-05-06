import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFaqs } from '../../actions/index';
require('./Faq.scss');

class Faq extends Component {
    constructor(props) {
        super(props);
        // this._renderContent = this._renderContent.bind(this);
        this._renderFaq = this._renderFaq.bind(this);
        this.editPage = this.editPage.bind(this);
        this.addNewFaq = this.addNewFaq.bind(this);
        this.createNewFaq = this.createNewFaq.bind(this);
        this._renderAdminInput = this._renderAdminInput.bind(this);
        this.state = {
            activeFaq: 0,
            addFaq: false,
            pageText: this.props.faqs
                ? this.props.faqs[0].content
                : 'These are our frequently asked questions, pick one from the left to view',
            pageTitle: 'Welcome to Frequently Asked Questions',
            adminEditing: false,
            frequentQuestions: [
                {
                    name: 'FAQ 1',
                    content: 'this is faq 1, click on my text to edit me'
                }, {
                    name: 'FAQ 3',
                    content: 'this is faq 3, click on my text to edit me'
                }, {
                    name: 'FAQ 4',
                    content: 'this is faq 4, click on my text to edit me'
                }, {
                    name: 'FAQ 5',
                    content: 'this is faq 5, click on my text to edit me'
                }, {
                    name: 'FAQ 6',
                    content: 'this is faq 6, click on my text to edit me'
                }, {
                    name: 'FAQ 7',
                    content: 'this is faq 7, click on my text to edit me'
                }, {
                    name: 'FAQ 8',
                    content: 'this is faq 8, click on my text to edit me'
                }, {
                    name: 'FAQ 9',
                    content: 'this is faq 9, click on my text to edit me'
                }
            ]
        };
        if (this.props.faqs) {
            this.state.pageText = this.props.faqs[0].content;
        }
        // console.log(this.state);
    }

    changeTab(index, event) {
        event.preventDefault();
        this.setState({ activeFaq: index,
            pageText: this.state.frequentQuestions[index].content,
            addTip: false,
            pageTitle: this.state.frequentQuestions[index].name,
            adminEditing: false
        });
    }

    editPage(event) {
        this.setState({ pageText: event.target.value });
        console.log(this.state);
    }

    _renderFaq() {
        const frequentQuestions = this.props.faqs
            ? this.props.faqs
            : this.state.frequentQuestions;
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
                {frequentQuestions.map(buttons.bind(this))}
            </div>
        );
    }

    _renderAdminInput(pageText) {
        if (this.state.adminEditing) {
            return (
                <div>
                    <input className='admin-edit-text title' placeholder="Enter Title" type="text" ref="faqName"></input>
                    <textarea value={pageText} className='admin-edit-text' onChange={this.editPage} ref="faqContent" rows="20"></textarea>
                    <button onClick={this.saveFaq} className="faq-button">Save Moving Tip</button>
                </div>
            );
        } else if (this.state.addFaq) {
            return (
                <div>
                    <input className='admin-edit-text title' placeholder="Enter Title" type="text" ref="faqName"></input>
                    <textarea placeholder="Enter your movingt tip content here" ref="faqContents" className='admin-edit-text' rows="20"></textarea>
                    <button onClick={this.createNewFaq} className="faq-button">Submit New Tip</button>
                </div>

            );
        }
        return '';
    }

    createNewFaq(event) {
        event.preventDefault();
        const newFaq = {
            name: this.refs.faqName.value,
            content: this.refs.faqContents.value
        };
        this.setState({ frequentQuestions: [...this.state.frequentQuestions, newFaq], addFaq: false });
        const newFaqIndex = this.state.frequentQuestions.length - 1;
        this.setState({ activeFaq: newFaqIndex });
    }

    toggleEdit(event) {
        event.preventDefault();
        console.log('here setting adminEditing');
        this.setState({
            adminEditing: !this.state.adminEditing
        });
        if (this.state.adminEditing) {
            console.log('here');
            this.state.frequentQuestions[this.state.activeFaq].content = this.state.pageText;
            this.props.dispatch(setFaqs(this.state.frequentQuestions));
        }
    }

    addNewFaq(event) {
        event.preventDefault();
        this.setState({
            adminEditing: false,
            addFaq: true
        });
    }

    render() {
        const pageText = this.state.pageText;
        const pageTitle = this.state.pageTitle;
        const adminInputDiv = this._renderAdminInput(pageText);
        const hidableContents = this.state.addTip || this.state.adminEditing ? 'hidden' : 'visible';
        const homePageContentsStyle = this.state.addFaq || this.state.adminEditing ? 'hidden' : 'home-page-contents-container faq visible';
        return (
            <div>
                <div className="container">
                    <div className="faq-tab-buttons">
                        {this._renderFaq()}
                        <button className="faq-button" onClick={this.addNewFaq}>Add FAQ</button>
                    </div>
                    <div className="home-page-contents faq">
                        {adminInputDiv}
                        <h3 className={hidableContents} style={{ 'text-align': 'center' }}>{pageTitle}</h3>
                        <div className={homePageContentsStyle}>
                            <p onClick={this.toggleEdit.bind(this)}>{pageText}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Faq.propTypes = {
    children: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    faqs: React.PropTypes.array
};

function mapStateToProps(state) {
    return { faqs: state.list.faqs };
}

export default connect(mapStateToProps)(Faq);
