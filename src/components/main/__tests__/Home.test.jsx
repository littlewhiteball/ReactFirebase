import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './../Home';
import Trending from './../../pages/Trending';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Home />);

describe('home component', () => {
    it('should render self', () => {
        expect(wrapper.find(Trending).exists()).toBe(true);
    });
});
