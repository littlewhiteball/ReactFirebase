import React from 'react';
import action from './../actions/competitionAction';

export default class CompetitionListAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };

        this.handleInputName = this.handleInputName.bind(this);
        this.addCompetition = this.addCompetition.bind(this);
    }

    handleInputName(e) {
        this.setState({ input: e.target.value });
    }

    addCompetition(e) {
        e.preventDefault();
        action.add({
            name: this.state.input,
            purchased: false
        });

        this.setState({
            input: ''
        });
    }
    render() {
        return (
            <div className="competition-add" >
                <form onSubmit={this.addCompetition}>
                    <input value={this.state.input} type="text" onChange={this.handleInputName} />
                    <button>Add Competition</button>
                </form>
            </div>
        )
    }
};
