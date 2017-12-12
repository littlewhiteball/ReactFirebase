import React from 'react';
import action from './../../actions/competitionsAction';

export default class Competition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            competition: props.competition
        };

        this.togglePurchased = this.togglePurchased.bind(this);
        this.remove = this.remove.bind(this);
    }

    togglePurchased(e) {
        e.preventDefault();
        if (this.state.competition.purchased) {
            action.unbuy(this.state.competition);
        } else {
            action.buy(this.state.competition);
        }
    }

    remove(e) {
        e.preventDefault();
        action.remove(this.state.competition);
    }

    render() {
        const competition = this.state.competition;
        return (
            <div className="row">
                <div className="six columns">
                    <h4 className={competition.purchased ? "strikethrough" : ""}>
                        {competition.name}
                    </h4>
                    <form className="three columns" onSubmit={this.togglePurchased}>
                        <button className={competition.purchased ? "" : "button-primary"}>
                            {competition.purchased ? "Unbuy" : "Buy"}
                        </button>
                    </form>
                    <form className="three columns" onSubmit={this.remove}>
                        <button>&times;</button>
                    </form>
                </div>
            </div>
        )
    }
};
