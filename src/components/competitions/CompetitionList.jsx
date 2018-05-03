import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CompetitionListItem from './CompetitionListItem';

export default class CompetitionList extends PureComponent {
    render() {
        return (
            <div>
                <br />
                {
                    Object.keys(this.props.competitions).map(key => (
                        // eslint-disable-next-line max-len
                        (<CompetitionListItem competition={this.props.competitions[key]} key={key} />)
                    ))
                }
            </div>
        );
    }
}

CompetitionList.propTypes = {
    // TODO: validate normalized (id as key) object
    // eslint-disable-next-line react/forbid-prop-types
    competitions: PropTypes.object.isRequired,
};
