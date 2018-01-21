import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddCompetitionForm from './../competitions/AddCompetitionForm';

export class NewCompetitionComponent extends PureComponent {
    render() {
        return this.props.auth.signedIn
            ? (<AddCompetitionForm />)
            : (<Redirect to="/auth" />);
    }
}

NewCompetitionComponent.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, null)(NewCompetitionComponent);
