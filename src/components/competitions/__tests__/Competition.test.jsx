import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Competition } from './../Competition';
import { unescape } from 'querystring';

configure({ adapter: new Adapter() });

const competition0 = {
    id: 'id0',
    title: 'title0',
};

const setup = () => {
    const props = {
        competition: competition0,
        update: jest.fn(),
        delete: jest.fn(),
    };
    const wrapper = mount(<Competition {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('competition component', () => {
    it('should render self', () => {
        const { wrapper } = setup();
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(wrapper.find('div.row').hasClass('row')).toBe(true);
        expect(wrapper.find('div.col-3').hasClass('col-3')).toBe(true);
        expect(wrapper.find('h4').hasClass('strikethrough')).toBe(true);
        expect(wrapper.find('h4').text()).toBe('title0');
        expect(wrapper.find('form').hasClass('col-3')).toBe(true);
        expect(wrapper.find('button').text()).toBe('×');
    });

    it('should call remove once submitted', () => {
        const { props, wrapper } = setup();
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(props.delete.mock.calls.length).toBe(1);
    });
});
