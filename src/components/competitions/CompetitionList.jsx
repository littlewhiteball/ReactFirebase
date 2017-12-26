import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Competition from './Competition';
import CompetitionListAdd from './CompetitionListAdd';

class CompetitionList extends Component {
    // TODO: This is to stop eslint complaining the component should be pure function
    getCompetitionsCount = () => this.props.competitions.length;

    render() {
        return (
            <div>
                <h1>{this.getCompetitionsCount}</h1>
                <div>
                    {
                        this.props.competitions.map(competition => (
                            <Competition competition={competition} key={competition.id} />
                        ))
                    }
                </div>
                <CompetitionListAdd />
            </div>
        );
    }
}

CompetitionList.propTypes = {
    competitions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect()(CompetitionList);
