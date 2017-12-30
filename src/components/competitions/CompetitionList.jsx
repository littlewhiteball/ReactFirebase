import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Competition from './Competition';
import CompetitionListAdd from './CompetitionListAdd';

class CompetitionList extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <br />
                    {
                        this.props.competitions.map(competition => (
                            <Competition competition={competition} key={competition.id} />
                        ))
                    }
                </div>
                <CompetitionListAdd />
            </div>
        );
    }
}

CompetitionList.propTypes = {
    competitions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect()(CompetitionList);
