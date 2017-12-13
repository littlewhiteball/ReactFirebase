import React, { Component } from 'react';
import { connect } from 'react-redux';

import Competition from './Competition';
import CompetitionListAdd from './CompetitionListAdd';

class CompetitionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitions: props.competitions
        };
    }

    render() {
        return (
            [
                <h1>Competition Listify</h1>,
                <div>
                    {
                        this.state.competitions.map(function (competition, index) {
                            return (
                                <Competition competition={competition} key={competition.id} />
                            )
                        })
                    }
                </div>,
                <CompetitionListAdd />
            ]
        )
    }
};

const mapStateToProps = (state) => ({
    competitions: state.competitions
});

const mapDispatchToProps = (dispatch) => {
    return {
        get: (competition) => {
            dispatch(addCompetition(competition));
        },
        delete: (competition) => {
            dispatch(deleteCompetition(competition));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList);
