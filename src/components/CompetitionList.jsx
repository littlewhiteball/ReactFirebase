import React from 'react';
import Competition from './Competition';
import CompetitionListAdd from './CompetitionListAdd';

export default class CompetitionList extends React.Component {
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
