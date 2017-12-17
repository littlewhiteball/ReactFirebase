import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CompetitionList from './../competitions/CompetitionList';
import { getCompetitions } from './../../actions/competitionsAction';

class Trending extends Component {
    componentWillMount() {
        this.props.get();
    }

    render() {
        return (
            <div className="container">
                <h1>Trending</h1>
                <CompetitionList competitions={this.props.competitions} />
            </div>
        );
    }
}

Trending.propTypes = {
    competitions: PropTypes.arrayOf(PropTypes.object).isRequired,
    get: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    competitions: state.competitions,
});

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getCompetitions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
