import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import PropType from 'prop-types';

const DateTimePicker = props => (
    <Datetime defaultValue={props.defaultDateTimeValue} onBlur={props.onChange} />
);

DateTimePicker.propTypes = {
    defaultDateTimeValue: PropType.instanceOf(Date),
    onChange: PropType.func.isRequired,
};

DateTimePicker.defaultProps = {
    defaultDateTimeValue: moment().toDate(),
};


export default DateTimePicker;
