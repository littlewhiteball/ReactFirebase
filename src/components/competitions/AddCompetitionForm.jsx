import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { push } from 'react-router-redux';

import DateTimePicker from './../utilities/DateTimePicker';

import { addCompetition } from './../../actions/competitionsAction';
import { CompetitionVisibilityEnum, getText, getKey } from './../../utilities/enums/competitionVisibility';

const COMPETITION_INFORMATION = 'Competition Information';
const TITLE = 'Title';
const TITLE_PLACEHOLDER = 'Competition title';
const TITLE_ID = 'Title';
const DESCRIPTION = 'Description';
const DESCRIPTION_PLACEHOLDER = 'Competition description';
const DESCRIPTION_ID = 'Description';
const PUBLIC = getText(CompetitionVisibilityEnum.PUBLIC);
const PUBLIC_ID = getText(CompetitionVisibilityEnum.PUBLIC);
const PRIVATE = getText(CompetitionVisibilityEnum.PRIVATE);
const PRIVATE_ID = getText(CompetitionVisibilityEnum.PRIVATE);
const VISIBILITY = 'Visibility';
const VISIBILITY_ID = 'Visibility';
const ENTRIES_CLOSE = 'Entries Close';
const ENTRIES_CLOSE_ID = 'EntriesClose';
const FULFILLMENT_DATE = 'Fulfillment Date';
const FULFILLMENT_DATE_ID = 'FulfillmentDate';
const OPTIONS = 'Options';
// TODO: Temporarily using comma separated text as list of options
const OPTIONS_PLACEHOLDER = 'Option1,Option2';
const OPTIONS_ID = 'Options';
const SAVE = 'Save';
const CANCEL = 'Cancel';

export class AddCompetitionFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saving: false,
            title: '',
            description: '',
            visibility: CompetitionVisibilityEnum.PUBLIC,
            start: moment().toDate(),
            entriesClose: moment().add(1, 'days').toDate(),
            fulfillment: moment().add(2, 'days').toDate(),
            options: [],
        };
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
            visibility: getKey(e.target.value),
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
            ownerId: this.props.userId,
            title: this.state.title,
            description: this.state.description,
            visibility: getText(this.state.visibility),
            start: this.state.start.getTime(),
            closing: this.state.entriesClose.getTime(),
            fulfillment: this.state.fulfillment.getTime(),
            options: this.state.options,
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
                                        <form className="form" autoComplete="off">
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={TITLE_ID}>{TITLE}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={TITLE_ID} placeholder={TITLE_PLACEHOLDER} onChange={this.updateTitle} />
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
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={FULFILLMENT_DATE_ID}>{FULFILLMENT_DATE}</label>
                                                <div className="col-lg-9" id={FULFILLMENT_DATE_ID}>
                                                    <DateTimePicker defaultDateTimeValue={this.state.fulfillment} onChange={this.updateFulfillmentDate} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={OPTIONS_ID}>{OPTIONS}</label>
                                                <div className="col-lg-9" id={OPTIONS_ID}>
                                                    <input className="form-control" type="text" id={OPTIONS_ID} placeholder={OPTIONS_PLACEHOLDER} onChange={this.updateOptions} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-lg-4 offset-lg-8 row">
                                                    <button className="col-lg-6 form-control btn btn-primary" type="button" onClick={this.saveCompetition}>
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
