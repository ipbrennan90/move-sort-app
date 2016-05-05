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
        this.state = {
            activeFaq: 0,
            pageText: this.props.faqs
                ? this.props.faqs[0].content
                : 'These are our frequently asked questions, pick one from the left to view',
            adminEditing: false,
            frequentQuestions: [
                {
                    key: 1,
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
        if (this.props.faqs) {
            this.state.pageText = this.props.faqs[0].content;
        }
        // console.log(this.state);
    }

    changeTab(index, event) {
        event.preventDefault();
        this.setState({ activeFaq: index, pageText: this.state.frequentQuestions[index].content });
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

    render() {
        const pageText = this.state.pageText;
        const adminInputDiv = this.state.adminEditing
            ? <textarea value={pageText} className='admin-edit-text' onChange={this.editPage} rows="20"></textarea>
            : '';
        return (
            <div>
                <div className="container">
                    <div className="faq-tab-buttons">
                        {this._renderFaq()}
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

Faq.propTypes = {
    children: React.PropTypes.element,
    dispatch: React.PropTypes.func,
    faqs: React.PropTypes.array
};

function mapStateToProps(state) {
    return { faqs: state.list.faqs };
}

export default connect(mapStateToProps)(Faq);
