import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CompetitionListItemSummary extends Component {
    render() {
        // TODO: Create util class to handle datetime conversion
        const start = new Date(this.props.competition.start).toLocaleString();
        const closing = new Date(this.props.competition.closing).toLocaleString();
        // TODO: Get count of each option
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
                                    <span className="badge badge-primary badge-pill">
                                        {i}
                                    </span>
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
