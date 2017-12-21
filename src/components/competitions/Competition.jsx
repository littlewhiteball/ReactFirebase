import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateCompetition, deleteCompetition } from './../../actions/competitionsAction';

class Competition extends Component {
    remove = (e) => {
        e.preventDefault();
        this.props.delete(this.props.competition);
    };

    update = (e) => {
        e.preventDefault();
        this.props.update(this.props.competition);
    };

    render() {
        return (
            <div className="row">
                <div className="six columns">
                    <h4 className="strikethrough">
                        {this.props.competition.title}
                    </h4>
                    <form className="three columns" onSubmit={this.remove}>
                        <button>&times;</button>
                    </form>
                    <form className="three columns" onSubmit={this.update}>
                        <button>&times;</button>
                    </form>
                </div>
            </div>
        );
    }
}

Competition.propTypes = {
    competition: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
    }).isRequired,
    update: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        update: competition => dispatch(updateCompetition(competition)),
        delete: competition => dispatch(deleteCompetition(competition)),
    }
);

export default connect(null, mapDispatchToProps)(Competition);
