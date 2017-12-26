import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteCompetition } from './../../actions/competitionsAction';

export class Competition extends Component {
    remove = (e) => {
        e.preventDefault();
        this.props.delete(this.props.competition);
    };

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <h4 className="strikethrough">
                        {this.props.competition.title}
                    </h4>
                    <form className="col-3" onSubmit={this.remove}>
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
    delete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        delete: competition => dispatch(deleteCompetition(competition)),
    }
);

export default connect(null, mapDispatchToProps)(Competition);
