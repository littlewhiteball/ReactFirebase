import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCompetition } from './../../actions/competitionsAction';

class CompetitionListAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    handleInputName = (e) => {
        this.setState({ input: e.target.value });
    }

    addCompetition = (e) => {
        e.preventDefault();
        this.props.add({
            title: this.state.input,
        });

        this.setState({
            input: '',
        });
    }

    render() {
        return (
            <div className="competition-add" >
                <form onSubmit={this.addCompetition}>
                    <input value={this.state.input} type="text" onChange={this.handleInputName} />
                    <button>Add Competition</button>
                </form>
            </div>
        );
    }
}

CompetitionListAdd.propTypes = {
    add: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    add: competition => dispatch(addCompetition(competition)),
});

export default connect(null, mapDispatchToProps)(CompetitionListAdd);
