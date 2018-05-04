import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import moment from 'moment';

import RadioButtons from './../utilities/RadioButtons';
import PlusMinusButtonInput from './../utilities/PlusMinusButtonInput';

import competitionEntriesDbModel from './../../database/models/competitionEntriesDbModel';
import competitionEntriesDbAdapter from './../../database/competitionEntriesDbAdapter';

const SAVE_BUTTON = 'Save';
const CANCEL_BUTTON = 'Cancel';
const ENTRIES_CLOSING_IN = 'Entries closing in';

const INITIAL_BET = 1;
const MIN_BET = 1;
const MAX_BET = 5;

export class JoinCompetitionFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: undefined,
            value: 0,
        };

        this.competitionId = props.computedMatch.params.id;
    }

    handleOptionChange = (e) => {
        this.setState({
            option: e.value,
        });
    }

    handleValueChange = (e) => {
        this.setState({
            value: e.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const competitionEntry = competitionEntriesDbModel(
            this.props.userId,
            this.state.option,
            this.state.value,
            moment().toDate().getTime(),
            moment().toDate().getTime(),
        );
        competitionEntriesDbAdapter.addCompetitionEntryToDb(this.competitionId, competitionEntry)
            .then(() => {
                this.props.navToPath('/');
            })
            .catch((error) => {
                console.log(error);
            });

        // TODO: if save succeeded
        this.props.navToPath('/');
    }

    render() {
        const competition = this.props.competitions[this.competitionId];
        /* TODO: entries closing in:
        1. if less than 1 day, count down hour:min:second
        2. if more than 1 day, count down day:hour:min
        */
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="card-outline-secondary">
                        <div className="card-header mb-2">
                            <div className="row">
                                <h3 className="col-9 text-left">
                                    {competition.title}
                                    <span className="badge badge-success ml-2">{competition.visibility}</span>
                                </h3>
                                <div className="col-3 card-outline-secondary text-right">
                                    <div className="card-block mb-2">
                                        <small className="card-text">{ENTRIES_CLOSING_IN}</small>
                                    </div>
                                    <span className="card-header">5 days</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-block">
                            <div className="form-group row">
                                <p className="col-lg-12">
                                    {competition.description}
                                </p>
                            </div>
                        </div>
                        <div className="card-block text-left text-lg mb-2">
                            <RadioButtons className="" options={competition.options} onValueChanged={this.handleOptionChange} />
                        </div>
                        <div className="card-block row">
                            <PlusMinusButtonInput className="col-2" initialValue={INITIAL_BET} min={MIN_BET} max={MAX_BET} onValueChanged={this.handleValueChange} />
                        </div>
                    </div>
                </div>
                <form className="input-form" onSubmit={this.handleSubmit} >
                    <div className="form-group row">
                        <div className="col-lg-4 offset-lg-8 row">
                            <button className="col-lg-6 form-control btn btn-primary" type="submit">
                                {SAVE_BUTTON}
                            </button>
                            <button className="col-lg-6 form-control btn btn-default" type="button">
                                {CANCEL_BUTTON}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

JoinCompetitionFormComponent.propTypes = {
    computedMatch: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
    competitions: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    navToPath: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    competitions: state.competitions,
    userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
    navToPath: pathname => dispatch(push(pathname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinCompetitionFormComponent);
