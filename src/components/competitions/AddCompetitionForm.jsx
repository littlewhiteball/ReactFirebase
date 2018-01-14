import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DateTimePicker from './../utilities/DateTimePicker';

const COMPETITION_INFORMATION = 'Competition Information';
const TITLE = 'Title';
const TITLE_PLACEHOLDER = 'Competition title';
const TITLE_ID = 'Title';
const DESCRIPTION = 'Description';
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
const FULFILLMENT_DATE = 'Fulfillment Date';
const FULFILLMENT_DATE_ID = 'FulfillmentDate';
const OPTIONS = 'Options';
// TODO: Temporarily using comma separated text as list of options
const OPTIONS_PLACEHOLDER = 'Option1,Option2';
const OPTIONS_ID = 'Options';

export class AddCompetitionFormComponent extends Component {
    delete = () => {

    }

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
                                                    <input className="form-control" type="text" id={TITLE_ID} placeholder={TITLE_PLACEHOLDER} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={DESCRIPTION_ID}>{DESCRIPTION}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={DESCRIPTION_ID} placeholder={DESCRIPTION_PLACEHOLDER} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={VISIBILITY_ID}>{VISIBILITY}</label>
                                                <div className="col-lg-9">
                                                    <input className="mr-1" name={VISIBILITY} type="radio" id={PUBLIC_ID} value={PUBLIC} defaultChecked />
                                                    <label className="mr-2" htmlFor={PUBLIC_ID}>{PUBLIC}</label>
                                                    <input className="mr-1" name={VISIBILITY} type="radio" id={PRIVATE_ID} value={PRIVATE} />
                                                    <label htmlFor={PRIVATE_ID}>{PRIVATE}</label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={ENTRIES_CLOSE_ID}>{ENTRIES_CLOSE}</label>
                                                <div className="col-lg-9" id={ENTRIES_CLOSE_ID}>
                                                    <DateTimePicker />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={FULFILLMENT_DATE_ID}>{FULFILLMENT_DATE}</label>
                                                <div className="col-lg-9" id={FULFILLMENT_DATE_ID}>
                                                    <DateTimePicker />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={OPTIONS_ID}>{OPTIONS}</label>
                                                <div className="col-lg-9" id={OPTIONS_ID}>
                                                    <input className="form-control" type="text" id={OPTIONS_ID} placeholder={OPTIONS_PLACEHOLDER} />
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

export default connect()(AddCompetitionFormComponent);
