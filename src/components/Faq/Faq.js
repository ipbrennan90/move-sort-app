import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFaqs } from '../../actions/index';

class Faq extends Component {
    constructor(props) {
        super(props);
        // this._renderContent = this._renderContent.bind(this);
        this._renderFaq = this._renderFaq.bind(this);
        this.editPage = this.editPage.bind(this);
		console.log('weinerz');
        this.state = {
            activeFaq: 0,
            pageText: this.props.faqs ? this.props.faqs[0].content : 'These are our frequently asked questions, pick one from the left to view',
            adminEditing: false,
            frequentQuestions: [
                { key: 1, name: 'poo', content: 'weinerz, weinerz, weinerz' },
                { key: 2, name: 'legit sauce', content: 'poops, poops, poops' }
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
        this.setState({
            pageText: event.target.value
        });
        console.log(this.state);
    }

    _renderFaq() {
        const frequentQuestions = this.props.faqs ? this.props.faqs : this.state.frequentQuestions;
        function buttons(child, index) {
            return (
                <div>
                    <button onClick={this.changeTab.bind(this, index)}> {child.name} </button>
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
        this.setState({ adminEditing: !this.state.adminEditing });
        if (this.state.adminEditing) {
            console.log('here');
            this.state.frequentQuestions[this.state.activeFaq].content = this.state.pageText;
            this.props.dispatch(setFaqs(this.state.frequentQuestions));
        }
    }

    render() {
        const pageText = this.state.pageText;
        const adminInputDiv = this.state.adminEditing ? <textarea value={pageText} className='admin-edit-text' onChange={this.editPage} rows="20"></textarea> : '';
        return (
            <div>
                <div className="faq-tab-buttons">
                    {this._renderFaq()}
                </div>
                <div className="home-page-contents">
                    {adminInputDiv}
                    <div className="home-page-contents-container">
                        <p onClick={this.toggleEdit.bind(this)}>{pageText}</p>
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
