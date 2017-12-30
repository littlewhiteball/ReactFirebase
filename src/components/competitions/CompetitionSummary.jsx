import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CompetitionSummary extends PureComponent {
    render() {
        // TODO: Create util class to handle datetime conversion
        const start = new Date(this.props.competition.start).toLocaleString();
        const closing = new Date(this.props.competition.closing).toLocaleString();
        // TODO: Get count of each option
        return (
            <div className="jumbotron mt-2 col-9">
                <small>start: {start}</small>
                <br />
                <small>closing: {closing}</small>
                <ul className="list-group">
                    {
                        this.props.competition.options.map(option => (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {option}
                                <span className="badge badge-primary badge-pill">
                                    10
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

CompetitionSummary.propTypes = {
    competition: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        start: PropTypes.date,
        closing: PropTypes.date,
        options: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
