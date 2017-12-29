import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CompetitionSummary extends PureComponent {
    render() {
        // TODO: Create util class to handle datetime conversion
        const start = this.props.competition.start.toLocaleString();
        const closing = this.props.competition.closing.toLocaleString();
        const summary = `${this.props.competition.title}\nstart:${start}\nend:${closing}`;
        return (
            <div className="card card-block">
                {summary}
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
