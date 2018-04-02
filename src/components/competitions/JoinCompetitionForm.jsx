import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';

export class JoinCompetitionFormComponent extends Component {
    render() {
        return (
            <div>
                <h1>Join Competition</h1>
            </div>
        );
    }
}

export default connect()(JoinCompetitionFormComponent);
