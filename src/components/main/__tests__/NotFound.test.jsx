import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Redirect } from 'react-router-dom';
import NotFound from './../NotFound';

configure({ adapter: new Adapter() });

jest.useFakeTimers();

const wrapper = shallow(<NotFound />);

describe('not found component', () => {
    it('should render self', () => {
        expect(wrapper.find('div').hasClass('container')).toBe(true);
        expect(wrapper.find('h4').hasClass('text-primary my-4')).toBe(true);
        expect(wrapper.find('h4').text()).toBe('Page not found, redirecting back to home page in 3 seconds');
    });

    it('initial state', () => {
        expect(wrapper.state('show')).toBe(false);
    });

    it('should not render redirect initially', () => {
        expect(wrapper.find(Redirect).exists()).toBe(false);
    });

    it('should render redirect after 3 seconds', () => {
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);

        jest.runAllTimers();

        expect(wrapper.state('show')).toBe(true);
        expect(wrapper.update().find(Redirect).exists()).toBe(true);
    });
});
