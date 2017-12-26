import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './../Footer';

configure({ adapter: new Adapter() });

const wrapper = mount(<Footer />);

describe('footer component', () => {
    it('should render self', () => {
        expect(wrapper.state('year')).toBe(2017);
        expect(wrapper.find('footer').hasClass('footer')).toBe(true);
        expect(wrapper.find('div').hasClass('container')).toBe(true);
        expect(wrapper.find('span').hasClass('text-muted')).toBe(true);
        expect(wrapper.find('span').text()).toBe('2017 ReactFirebase');
    });
});
