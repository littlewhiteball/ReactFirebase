import React, { Component } from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

export default class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTimeValue: moment(),
        };
    }

    render() {
        const { dateTimeValue } = this.state;
        return <Datetime value={dateTimeValue} />;
    }
}
