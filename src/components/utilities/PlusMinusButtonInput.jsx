import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlusMinusButtonInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue,
        };
    }

    handleMinus = (e) => {
        e.preventDefault();
        this.updateValue(this.state.value - 1);
    };

    handlePlus = (e) => {
        e.preventDefault();
        this.updateValue(this.state.value + 1);
    };

    updateValue = (newValue) => {
        this.setState({
            value: newValue,
        });
        this.props.onValueChanged({
            value: newValue,
        });
    };

    render() {
        return (
            <div>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button
                            // TODO: eslint bug: https://github.com/yannickcr/eslint-plugin-react/issues/1187
                            /*eslint-disable*/
                            type="button"
                            className="btn btn-danger btn-number"
                            onClick={this.handleMinus}
                            disabled={this.state.value <= this.props.min}
                        /* eslint-enable */
                        >
                            <span className="fa fa-minus" />
                        </button>
                    </span>
                    <input
                        /*eslint-disable*/
                        type="text"
                        className="form-control input-number"
                        value={this.state.value}
                        readOnly="readOnly"
                    /* eslint-enable */
                    />
                    <span className="input-group-btn">
                        <button
                            /* eslint-disable */
                            type="button"
                            className="btn btn-success btn-number"
                            onClick={this.handlePlus}
                            disabled={this.state.value >= this.props.max}
                        /* eslint-enable */
                        >
                            <span className="fa fa-plus" />
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

PlusMinusButtonInput.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onValueChanged: PropTypes.func.isRequired,
    // TODO: validation: initial value must be bigger than min and smaller than max
    initialValue: PropTypes.number.isRequired,
};
