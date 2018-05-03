import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CompetitionList from './../competitions/CompetitionList';
import { getCompetitions } from './../../actions/competitionsAction';

export class TrendingComponent extends Component {
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

TrendingComponent.propTypes = {
    // TODO: validate normalized (id as key) object
    // eslint-disable-next-line react/forbid-prop-types
    competitions: PropTypes.object.isRequired,
    get: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    competitions: state.competitions,
});

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getCompetitions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingComponent);
