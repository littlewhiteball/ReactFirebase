import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user0 } from './../../../__tests_constants__';

import { ProfileComponent } from './../Profile';
import EditProfile from './../../users/EditProfile';

configure({ adapter: new Adapter() });

const setup = (signedIn) => {
    const props = {
        userId: signedIn ? user0.id : '',
    };
    const wrapper = shallow(<ProfileComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('profile component', () => {
    it('should render self', () => {
        const { wrapper } = setup(true);

        expect(wrapper.find(EditProfile).exists()).toBe(true);
    });
});
