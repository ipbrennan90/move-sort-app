import React, { Component } from 'react';
import { connect } from 'react-redux';


class Faq extends Component {
    constructor(props) {
        super(props);
        // this._renderContent = this._renderContent.bind(this);
        this._renderFaq = this._renderFaq.bind(this);
        this.frequentQuestions = [
            { key: 1, name: 'poo', content: 'weinerz, weinerz, weinerz' },
            { key: 2, name: 'legit sauce', content: 'poops, poops, poops' }
        ];
        this.state = {
            activeFaq: 0
        };
        // console.log(this.state);
    }

    selectTab(tab) {
        this.setState({ selected: tab });
    }

    changeTab(index, event) {
        event.preventDefault();
        this.setState({ activeFaq: index });
    }

    _renderFaq() {
        function buttons(child, index) {
            return (
                <div>
                    <button onClick={this.changeTab.bind(this, index)}> {child.name} </button>
                </div>
            );
        }
        return (
            <div>
                {this.frequentQuestions.map(buttons.bind(this))}
            </div>
        );
    }

    // _renderContent() {
    //     console.log(this.props.tab);
    //     const selectedTab = this.props.tab;
    //     console.log(selectedTab);
    //     return (
    //         <div className="tabs-content">
    //             {this.props.children[selectedTab]}
    //         </div>
    //     );
    // }

    render() {
        const pageText = this.frequentQuestions[this.state.activeFaq].content;
        return (
            <div>
                <div className="faq-tab-buttons">
                    {this._renderFaq()}
                </div>
                <div className="home-page-contents">
                    <div className="home-page-contents-container">
                        <p>{pageText}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Faq.propTypes = {
    children: React.PropTypes.element,
    frequentQuestions: React.PropTypes.element
};

function mapStateToProps(state) {
    return { items: state.list.items };
}

export default connect(mapStateToProps)(Faq);
