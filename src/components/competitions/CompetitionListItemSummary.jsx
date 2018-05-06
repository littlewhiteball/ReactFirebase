import React, { Component } from 'react';
import PropTypes from 'prop-types';

import competitionEntriesDbAdapter from './../../database/competitionEntriesDbAdapter';

import mapReduce from './../../utilities/mapReduce';

// eslint-disable-next-line react/prefer-stateless-function
export default class CompetitionListItemSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitionEntriesLoaded: false,
        };
    }

    componentWillMount() {
        this.optionCountAndValues = {};

        competitionEntriesDbAdapter
            .getCompetitionEntriesOnceFromDb(this.props.competition.id)
            .then((snapshot) => {
                const entries = snapshot.val();
                if (entries) {
                    this.optionCountAndValues = mapReduce.groupByAndSum(entries, 'option', 'value');
                }

                this.setState({
                    competitionEntriesLoaded: true,
                });
            });
    }

    getCountAndValuePill = option => (
        <div>
            <span className="badge badge-primary badge-pill">
                {option in this.optionCountAndValues ? this.optionCountAndValues[option].count : 0}
            </span>
            <span className="badge badge-primary badge-pill ml-2">
                ${option in this.optionCountAndValues ? this.optionCountAndValues[option].sum : 0}
            </span>
        </div>
    );

    render() {
        // TODO: Create util class to handle datetime conversion
        const start = new Date(this.props.competition.start).toLocaleString();
        const closing = new Date(this.props.competition.closing).toLocaleString();

        return (
            <div className="jumbotron py-2 mt-2 col-9">
                <small>start: {start}</small>
                <br />
                <small>closing: {closing}</small>
                <ul className="list-group mt-2">
                    {
                        this.props.competition.options.map((option, i) => {
                            const optionId = `${this.props.competition.id}option${i}`;
                            return (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={optionId}>
                                    <span>{option}</span>
                                    {
                                        this.state.competitionEntriesLoaded
                                            ? this.getCountAndValuePill(option)
                                            : null
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

CompetitionListItemSummary.propTypes = {
    competition: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        start: PropTypes.date,
        closing: PropTypes.date,
        options: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
