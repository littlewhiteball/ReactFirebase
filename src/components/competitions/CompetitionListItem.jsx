import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

import CompetitionListItemSummary from './CompetitionListItemSummary';

export class CompetitionListItemComponent extends Component {
    handleJoin = (e) => {
        e.preventDefault();
        this.props.navToPath(`/competition/join/${this.props.competition.id}`);
    }

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
                        <button type="button" className="btn btn-primary" onClick={this.handleJoin}>Join</button>
                    </div>
                </div>
                <div className="collapse" id={competitionSummaryId}>
                    <CompetitionListItemSummary competition={this.props.competition} />
                </div>
                <hr />
            </div>
        );
    }
}

CompetitionListItemComponent.propTypes = {
    competition: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        start: PropTypes.date,
        closing: PropTypes.date,
        options: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    navToPath: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    navToPath: pathname => dispatch(push(pathname)),
});

export default connect(null, mapDispatchToProps)(CompetitionListItemComponent);
