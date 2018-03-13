import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import storageAdapter from './../../database/storageAdapter';
import { updateUser } from './../../actions/userAction';

const UPLOAD_PROFILE_PHOTO_SUCCEEDED_ALERT = 'Photo has been uploaded. Please press save button to update profile photo';
const UPLOAD_PROFILE_PHOTO_FAILED_ALERT = 'Failed to upload photo. Please try again';
const EDIT_PROFILE = 'Edit Profile';
const UPLOAD = 'Upload';
const NAME = 'Name';
const NAME_ID = 'Name';
const EMAIL = 'Email';
const EMAIL_ID = 'Email';
const SAVE = 'Save';
const CANCEL = 'Cancel';

const DEFAULT_PROFILE_PHOTO = '/favicon.ico';

export class EditProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            uploadProfilePhotoSucceeded: false,
            uploadProfilePhotoFailed: false,
            saving: false,
            profilePhoto: '',
            profilePhotoDownloadURL: '',
            name: '',
            email: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            profilePhotoDownloadURL: nextProps.user.photoUrl,
            name: nextProps.user.name,
            email: nextProps.user.email,
        });
    }

    closeAlert = () => {
        this.setState({
            showAlert: false,
        });
    }

    closeUploadProfilePhotoSucceededAlert = (e) => {
        e.preventDefault();
        this.closeAlert();
        this.setState({
            uploadProfilePhotoSucceeded: false,
        });
    }

    closeUploadProfilePhotoFailedAlert = (e) => {
        e.preventDefault();
        this.closeAlert();
        this.setState({
            uploadProfilePhotoFailed: false,
        });
    }

    handleProfilePhotoChange = (e) => {
        e.preventDefault();
        this.setState({
            profilePhoto: e.target.files[0],
        });
    }

    uploadProfilePhoto = (e) => {
        e.preventDefault();
        storageAdapter.addProfilePhotoToStorage(this.props.user.id, this.state.profilePhoto)
            .then((snapshot) => {
                this.setState({
                    profilePhotoDownloadURL: snapshot.downloadURL,
                    showAlert: true,
                    uploadProfilePhotoSucceeded: true,
                });
            })
            .catch((error) => {
                console.error(error.message);
                this.setState({
                    showAlert: true,
                    uploadProfilePhotoFailed: true,
                });
            });
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
            photoUrl: this.state.profilePhotoDownloadURL,
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
        const imgSrc = this.state.profilePhotoDownloadURL;
        let alert = null;
        if (this.state.showAlert) {
            if (this.state.uploadProfilePhotoSucceeded) {
                alert = (
                    <div className="alert alert-info alert-dismissible fade show mt-2" role="alert">
                        <button className="close" type="button" onClick={this.closeUploadProfilePhotoSucceededAlert}>
                            <span>&times;</span>
                        </button>
                        <p>{UPLOAD_PROFILE_PHOTO_SUCCEEDED_ALERT}</p>
                    </div>
                );
            } else if (this.state.uploadProfilePhotoFailed) {
                alert = (
                    <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                        <button className="close" type="button" onClick={this.closeUploadProfilePhotoFailedAlert}>
                            <span>&times;</span>
                        </button>
                        <p>{UPLOAD_PROFILE_PHOTO_FAILED_ALERT}</p>
                    </div>
                );
            }
        }

        return (
            <div className="container">
                {alert}
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
                                                <div className="form-group row">
                                                    <div className="text-center row">
                                                        <img className="rounded-circle col-1 offset-1" src={imgSrc} key={imgSrc} height="40" width="40" alt={DEFAULT_PROFILE_PHOTO} />
                                                        <input className="form-control col-6" type="file" onChange={this.handleProfilePhotoChange} />
                                                        <button className="form-control btn btn-sm btn-info col-2 ml-2" type="button" onClick={this.uploadProfilePhoto}>{UPLOAD}</button>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor={NAME_ID}>{NAME}</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" id={NAME_ID} value={this.state.name} onChange={this.updateName} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label form-control-label" htmlFor={EMAIL_ID}>{EMAIL}</label>
                                                    <div className="col-lg-9">
                                                        <input className="form-control" type="text" id={EMAIL_ID} value={this.state.email} readOnly onChange={this.updateEmail} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-4 offset-md-8 row">
                                                        <button className="col-md-4 btn btn-primary" onClick={this.saveProfile} type="button">
                                                            {
                                                                this.state.saving ?
                                                                    <i className="fa fa-spinner fa-spin" /> :
                                                                    null
                                                            }
                                                            {SAVE}
                                                        </button>
                                                        <button className="col-md-4 ml-2 btn btn-default" onClick={this.cancelChanges} type="button">{CANCEL}</button>
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
            </div>
        );
    }
}

EditProfileComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        photoUrl: PropTypes.string,
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
