import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Redirect } from 'react-router-dom';
import NotFound from './../NotFound';

configure({ adapter: new Adapter() });

const wrapper = shallow(<NotFound />);

describe('not found component', () => {
    it('should render self', () => {
        expect(wrapper.find('h1').text()).toBe('Not found, redirecting back to home page');
        expect(wrapper.find(Redirect).exists()).toBe(true);
    });
});
