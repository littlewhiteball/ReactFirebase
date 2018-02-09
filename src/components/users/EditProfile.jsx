import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateUser } from './../../actions/userAction';

const EDIT_PROFILE = 'Edit Profile';
const PROFILE_PHOTO = 'Profile Photo';
const NAME = 'Name';
const NAME_ID = 'Name';
const EMAIL = 'Email';
const EMAIL_ID = 'Email';
const SAVE = 'Save';
const CANCEL = 'Cancel';

export class EditProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saving: false,
            name: this.props.user.name,
            email: this.props.user.email,
        };
    }

    updateName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value,
        });
    }

    updateEmail = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value,
        });
    }

    saveProfile = () => {
        this.setState({
            saving: true,
        });

        const userUpdate = Object.assign({}, this.props.user, {
            name: this.state.name,
            email: this.state.email,
        });
        this.props.saveChange(userUpdate)
            .then(() => {
                this.setState({
                    saving: false,
                });
            })
            .catch((error) => {
                console.error(error.message);
                this.setState({
                    saving: false,
                });
            });
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
                                                    <input className="form-control" type="text" id={NAME_ID} placeholder={this.props.user.name} onChange={this.updateName} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-lg-3 col-form-label form-control-label" htmlFor={EMAIL_ID}>{EMAIL}</label>
                                                <div className="col-lg-9">
                                                    <input className="form-control" type="text" id={EMAIL_ID} placeholder={this.props.user.email} onChange={this.updateEmail} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-lg-4 offset-lg-8 row">
                                                    <button className="col-lg-6 btn btn-primary" onClick={this.saveProfile} type="button">
                                                        {
                                                            this.state.saving ?
                                                                <i className="fa fa-spinner fa-spin" /> :
                                                                null
                                                        }
                                                        {SAVE}
                                                    </button>
                                                    <button className="col-lg-6 btn btn-default" onClick={this.cancelChanges} type="button">{CANCEL}</button>
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
    saveChange: userUpdate => dispatch(updateUser(userUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent);
