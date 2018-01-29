import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddCompetitionForm from './../competitions/AddCompetitionForm';

export class NewCompetitionComponent extends PureComponent {
    render() {
        return this.props.user.id
            ? (<AddCompetitionForm />)
            : (<Redirect to="/auth" />);
    }
}

NewCompetitionComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(NewCompetitionComponent);
