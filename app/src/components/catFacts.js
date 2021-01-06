import React from 'react';
import { connect } from 'react-redux';

import { updatecatFacts } from '../actions';

class catFacts extends React.Component {
    state = {
        newcatFactsText: this.props.catFacts,
        editing: false
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    updatecatFacts = e => {
        e.preventDefault();
        this.props.updatecatFacts(this.state.newcatFactsText);
    };

    render() {
        return (
            <div>
                <h1>
                    "Cat Facts";
                </h1>
                <div>
                    {state.catFacts.text};
                    <button onClick={this.updatecatFacts}>New Fact</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        catFacts: state.catFacts.text
    };
};

export default connect(
    mapStateToProps,
    { updateCatFacts }
)(catFacts);
