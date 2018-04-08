import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import JoinCompetitionForm from './../competitions/JoinCompetitionForm';

// eslint-disable-next-line react/prefer-stateless-function
export class JoinCompetitionComponent extends PureComponent {
    render() {
        return (<JoinCompetitionForm {...this.props} />);
    }
}

export default connect()(JoinCompetitionComponent);
