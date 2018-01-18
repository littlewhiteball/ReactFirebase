import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CompetitionListItem from './CompetitionListItem';
import CompetitionListAdd from './CompetitionListAdd';

class CompetitionList extends PureComponent {
    render() {
        return (
            <div>
                <br />
                {
                    this.props.competitions.map(competition => (
                        <CompetitionListItem competition={competition} key={competition.id} />
                    ))
                }
                <CompetitionListAdd />
            </div>
        );
    }
}

CompetitionList.propTypes = {
    competitions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect()(CompetitionList);
