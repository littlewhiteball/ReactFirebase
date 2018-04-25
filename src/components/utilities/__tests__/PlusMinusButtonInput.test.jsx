import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlusMinusButtonInput from './../PlusMinusButtonInput';

configure({ adapter: new Adapter() });

const setup = (initialValue) => {
    const props = {
        min: 1,
        max: 5,
        onValueChange: jest.fn(),
        initialValue,
    };

    const wrapper = mount(<PlusMinusButtonInput {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('plus minus button input component', () => {
    it('should render self', () => {
        const { wrapper } = setup(1);

        expect(wrapper.find('div').at(1).hasClass('input-group')).toBe(true);
        expect(wrapper.find('span').at(0).hasClass('input-group-btn')).toBe(true);
        expect(wrapper.find('button').at(0).hasClass('btn btn-danger btn-number')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('button');
        expect(wrapper.find('button').at(0).prop('disabled')).toBe(true);
        expect(wrapper.find('span').at(1).hasClass('fa fa-minus')).toBe(true);
        expect(wrapper.find('input').hasClass('form-control input-number')).toBe(true);
        expect(wrapper.find('input').prop('type')).toBe('text');
        expect(wrapper.find('input').prop('value')).toBe(1);
        expect(wrapper.find('input').prop('readOnly')).toBe('readOnly');
        expect(wrapper.find('span').at(2).hasClass('input-group-btn')).toBe(true);
        expect(wrapper.find('button').at(1).hasClass('btn btn-success btn-number')).toBe(true);
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
        expect(wrapper.find('button').at(1).prop('disabled')).toBe(false);
        expect(wrapper.find('span').at(3).hasClass('fa fa-plus')).toBe(true);
    });

    it('initial state', () => {
        const { wrapper } = setup(1);

        expect(wrapper.state('value')).toBe(1);
    });

    it('should have min as initial value if not set', () => {
        const { props, wrapper } = setup(1);

        expect(wrapper.props().initialValue).toBe(props.min);
    });

    it('should set initial value prop', () => {
        const expectedInitialValue = 3;
        const { wrapper } = setup(expectedInitialValue);

        expect(wrapper.props().initialValue).toBe(expectedInitialValue);
    });

    it('handle minus, should set value state and call onValueChange of props', () => {
        const { props, wrapper } = setup(2);
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        expect(wrapper.state('value')).toBe(1);
        expect(props.onValueChange.mock.calls.length).toBe(1);
    });

    it('handle plus, should set value state and call onValueChange of props', () => {
        const { props, wrapper } = setup(3);
        wrapper.find('button').at(1).simulate('click', { preventDefault() { } });

        expect(wrapper.state('value')).toBe(4);
        expect(props.onValueChange.mock.calls.length).toBe(1);
    });

    it('should disable minus button when value is 1', () => {
        const { wrapper } = setup(1);
        wrapper.setState({
            value: 1,
        });

        expect(wrapper.find('button').at(0).prop('disabled')).toBe(true);
    });

    it('should disable plus button when value is 5', () => {
        const { wrapper } = setup(1);
        wrapper.setState({
            value: 5,
        });

        expect(wrapper.find('button').at(1).prop('disabled')).toBe(true);
    });
});
