import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { push } from 'react-router-redux';

import DateTimePicker from './../utilities/DateTimePicker';

import { addCompetition } from './../../actions/competitionsAction';

const COMPETITION_INFORMATION = 'Competition Information';
const TITLE = 'Title';
const TITLE_PLACEHOLDER = 'Competition title';
const TITLE_ID = 'Title';
const TITLE_INVALID_FEEDBACK = 'Please provide a title for your competition';
const TITLE_MAX_LENGTH = 256;
const DESCRIPTION = 'Description (Optional)';
const DESCRIPTION_PLACEHOLDER = 'Competition description';
const DESCRIPTION_ID = 'Description';
const PUBLIC = 'Public';
const PUBLIC_ID = 'Public';
const PRIVATE = 'Private';
const PRIVATE_ID = 'Private';
const VISIBILITY = 'Visibility';
const VISIBILITY_ID = 'Visibility';
const ENTRIES_CLOSE = 'Entries Close';
const ENTRIES_CLOSE_ID = 'EntriesClose';
const ENTRIES_CLOSE_INVALID_FEEDBACK = 'Please provide a valid datetime in the format of MM/dd/yyyy hh:mm AM/PM';
const FULFILLMENT_DATE = 'Fulfillment Date';
const FULFILLMENT_DATE_ID = 'FulfillmentDate';
const FULFILLMENT_DATE_INVALID_FEEDBACK = 'Please provide a valid datetime in the format of MM/dd/yyyy hh:mm AM/PM';
const OPTIONS = 'Options';
// TODO: Temporarily using comma separated text as list of options
const OPTIONS_PLACEHOLDER = 'Option1,Option2';
const OPTIONS_ID = 'Options';
const OPTIONS_INVALID_FEEDBACK = 'Please provide a list of comma separated options without whitespaces';
// TODO: temp: no whitespaces allowed for options
const OPTIONS_REGEX = '^\\S*$';
const SAVE = 'Save';
const CANCEL = 'Cancel';

export class AddCompetitionFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formClass: 'needs-validation',
            saving: false,
            title: '',
            description: '',
            visibility: 'Public',
            start: moment().toDate(),
            entriesClose: moment().add(1, 'days').toDate(),
            fulfillment: moment().add(2, 'days').toDate(),
            options: [],
        };
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.checkValidity() === true) {
            this.saveCompetition();
        } else {
            this.setState({
                formClass: 'was-validated',
            });
        }
    }

    updateTitle = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value,
        });
    }

    updateDescription = (e) => {
        e.preventDefault();
        this.setState({
            description: e.target.value,
        });
    }

    updateVisibility = (e) => {
        e.preventDefault();
        this.setState({
            visibility: e.target.value,
        });
    }

    updateEntriesClose = (e) => {
        this.setState({
            entriesClose: e.toDate(),
        });
    }

    updateFulfillmentDate = (e) => {
        this.setState({
            fulfillment: e.toDate(),
        });
    }

    updateOptions = (e) => {
        this.setState({
            options: e.target.value.split(','),
        });
    }

    saveCompetition = () => {
        this.setState({
            saving: true,
        });

        // TODO: validation
        const competition = {
            title: this.state.title,
            description: this.state.description,
            visibility: this.state.visibility,
            options: this.state.options,
            createdBy: this.props.userId,
            owner: this.props.userId,
            start: this.state.start.getTime(),
            closing: this.state.entriesClose.getTime(),
            fulfillment: this.state.fulfillment.getTime(),
        };
        this.props.saveChange(competition)
            .then(() => {
                this.setState({
                    saving: false,
                });
            })
            .catch((error) => {
                console.error(error.Message);
                this.setState({
                    saving: false,
                });
            });

        // TODO: if save succeeded
        this.props.navToPath('/');
    }

    cancelChanges = () => {
        // TODO: discard changes?
        this.props.navToPath('/');
    }

    /* eslint-disable max-len */
    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <span className="anchor" />
                                <hr className="my-2" />
                                <div className="card-outline-secondary">
                                    <div className="card-header mb-2">
                                        <h3>{COMPETITION_INFORMATION}</h3>
                                    </div>
                                    <div className="card-block">
                                        <form className={this.state.formClass} onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={TITLE_ID}>{TITLE}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={TITLE_ID} placeholder={TITLE_PLACEHOLDER} onChange={this.updateTitle} required maxLength={TITLE_MAX_LENGTH} />
                                                    <div className="invalid-feedback">
                                                        {TITLE_INVALID_FEEDBACK}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={DESCRIPTION_ID}>{DESCRIPTION}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={DESCRIPTION_ID} placeholder={DESCRIPTION_PLACEHOLDER} onChange={this.updateDescription} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={VISIBILITY_ID}>{VISIBILITY}</label>
                                                <div className="col-lg-9">
                                                    <input className="mr-1" name={VISIBILITY} type="radio" id={PUBLIC_ID} value={PUBLIC} onChange={this.updateVisibility} defaultChecked />
                                                    <label className="mr-2" htmlFor={PUBLIC_ID}>{PUBLIC}</label>
                                                    <input className="mr-1" name={VISIBILITY} type="radio" id={PRIVATE_ID} value={PRIVATE} onChange={this.updateVisibility} />
                                                    <label htmlFor={PRIVATE_ID}>{PRIVATE}</label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={ENTRIES_CLOSE_ID}>{ENTRIES_CLOSE}</label>
                                                <div className="col-lg-9" id={ENTRIES_CLOSE_ID}>
                                                    <DateTimePicker defaultDateTimeValue={this.state.entriesClose} onChange={this.updateEntriesClose} />
                                                    <div className="invalid-feedback">
                                                        {ENTRIES_CLOSE_INVALID_FEEDBACK}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={FULFILLMENT_DATE_ID}>{FULFILLMENT_DATE}</label>
                                                <div className="col-lg-9" id={FULFILLMENT_DATE_ID}>
                                                    <DateTimePicker defaultDateTimeValue={this.state.fulfillment} onChange={this.updateFulfillmentDate} />
                                                    <div className="invalid-feedback">
                                                        {FULFILLMENT_DATE_INVALID_FEEDBACK}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={OPTIONS_ID}>{OPTIONS}</label>
                                                <div className="col-lg-9" id={OPTIONS_ID}>
                                                    <input className="form-control" type="text" id={OPTIONS_ID} placeholder={OPTIONS_PLACEHOLDER} onChange={this.updateOptions} required pattern={OPTIONS_REGEX} />
                                                    <div className="invalid-feedback">
                                                        {OPTIONS_INVALID_FEEDBACK}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-lg-4 offset-lg-8 row">
                                                    <button className="col-lg-6 form-control btn btn-primary" type="submit" >
                                                        {
                                                            this.state.saving ?
                                                                <i className="fa fa-spinner fa-spin" /> :
                                                                null
                                                        }
                                                        {SAVE}
                                                    </button>
                                                    <button className="col-lg-6 form-control btn btn-default" type="button" onClick={this.cancelChanges}>{CANCEL}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddCompetitionFormComponent.propTypes = {
    userId: PropTypes.string.isRequired,
    saveChange: PropTypes.func.isRequired,
    navToPath: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    userId: state.user.id,
    location: state.routing.location,
});

const mapDispatchToProps = dispatch => ({
    saveChange: competition => dispatch(addCompetition(competition)),
    navToPath: pathName => dispatch(push(pathName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCompetitionFormComponent);
