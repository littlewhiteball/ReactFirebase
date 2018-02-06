import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateUser } from './../../actions/userAction';

const EDIT_PROFILE = 'Edit Profile';
const PROFILE_PHOTO = 'Profile Photo';
const NAME = 'Name';
const NAME_ID = 'Name';
const NAME_PLACEHOLDER = 'Your name';
const EMAIL = 'Email';
const EMAIL_ID = 'Email';
const EMAIL_PLACEHOLDER = 'Your email';
const SAVE = 'Save';
const CANCEL = 'Cancel';

export class EditProfileComponent extends Component {
    saveProfile = () => {
        this.props.saveChange();
    }

    cancelChange = () => {

    }

    render() {
        const formTitle = `${EDIT_PROFILE} - ${this.props.user.name}`;
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
                                        <h3>{formTitle}</h3>
                                    </div>
                                    <div className="card-block">
                                        <form className="form" autoComplete="off">
                                            <div className="form-group row col-lg-6 offset-lg-3">
                                                <div className="text-center ">
                                                    <img className="rounded-circle" src="favicon.ico" height="40" width="40" alt={PROFILE_PHOTO} />
                                                    <input className="form-control" type="file" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={NAME_ID}>{NAME}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={NAME_ID} placeholder={NAME_PLACEHOLDER} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={EMAIL_ID}>{EMAIL}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={EMAIL_ID} placeholder={EMAIL_PLACEHOLDER} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-lg-4 offset-lg-8 row">
                                                    <button className="col-lg-6 form-control btn btn-primary" onClick={this.saveProfile}>{SAVE}</button>
                                                    <button className="col-lg-6 form-control btn btn-default" onClick={this.cancelChanges}>{CANCEL}</button>
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

EditProfileComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
    saveChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    saveChange: () => dispatch(updateUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent);
