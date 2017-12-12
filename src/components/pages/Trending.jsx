import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CompetitionList } from './../competitions/CompetitionList';
import { getCompetitions } from './../../actions/competitionsAction';

class Trending extends Component {
    componentWillMount() {
        this.props.get();
    }

    render() {
        return (
            <CompetitionList competitions={this.props.competitions} />
        );
    }
}

const mapStateToProps = (state) => ({
    competitions: state.competitions
});

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => {
            dispatch(getCompetitions());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
