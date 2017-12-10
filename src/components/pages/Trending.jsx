import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCompetition, deleteCompetition } from './../actions';

class Trending extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.competitions.title}</li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    competitions: state.competitions
});

const mapDispatchToProps = (dispatch) => {
    return {
        add: (competition) => {
            dispatch(addCompetition(competition));
        },
        delete: (competition) => {
            dispatch(deleteCompetition(competition));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
