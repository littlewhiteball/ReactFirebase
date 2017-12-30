import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CompetitionSummary from './CompetitionSummary';

import { deleteCompetition } from './../../actions/competitionsAction';

export class CompetitionComponent extends Component {
    remove = (e) => {
        e.preventDefault();
        this.props.delete(this.props.competition);
    };

    render() {
        const competitionSummaryId = `competitionSummary${this.props.competition.id}`;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <a href={`#${competitionSummaryId}`} data-toggle="collapse">
                            {this.props.competition.title}
                        </a>
                    </div>
                    <div className="col-3">
                        <form onSubmit={this.remove}>
                            <button type="button" className="btn btn-primary">Join</button>
                        </form>
                    </div>
                </div>
                <div className="collapse" id={competitionSummaryId}>
                    <CompetitionSummary competition={this.props.competition} />
                </div>
                <hr />
            </div>
        );
    }
}

CompetitionComponent.propTypes = {
    competition: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        start: PropTypes.date,
        closing: PropTypes.date,
        options: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    delete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        delete: competition => dispatch(deleteCompetition(competition)),
    }
);

export default connect(null, mapDispatchToProps)(CompetitionComponent);
