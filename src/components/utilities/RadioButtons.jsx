import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioButtons extends Component {
    handleChange = (e) => {
        this.props.onValueChanged(e.target.id);
    };

    render() {
        return (
            <div>
                {this.props.options.map(opt => (
                    <div className="form-check my-1" key={opt}>
                        <input
                            // TODO: eslint bug: https://github.com/yannickcr/eslint-plugin-react/issues/1187
                            /* eslint-disable */
                            className="form-check-input"
                            name="options"
                            type="radio"
                            id={opt}
                            onClick={this.handleChange}
                        /* eslint-enable */
                        />
                        <label
                            /* eslint-disable */
                            className="form-check-label border border-default border-left-0"
                            htmlFor={opt}
                        /* eslint-disable */
                        >
                            {opt}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}

RadioButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onValueChanged: PropTypes.func.isRequired,
};
