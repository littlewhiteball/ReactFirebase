import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AddCompetitionForm from './../competitions/AddCompetitionForm';

// eslint-disable-next-line react/prefer-stateless-function
export class NewCompetitionComponent extends PureComponent {
    render() {
        return (<AddCompetitionForm />);
    }
}

export default connect()(NewCompetitionComponent);
