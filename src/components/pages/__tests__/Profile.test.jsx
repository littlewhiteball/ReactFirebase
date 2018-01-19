import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Profile from './../Profile';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Profile />);

describe('home component', () => {
    it('should render self', () => {
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
