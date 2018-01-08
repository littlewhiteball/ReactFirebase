import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user } from './../../../__tests_constants__';

import { ProfileComponent } from './../Profile';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        user: Object.assign({}, user, {
            signedIn: true,
        }),
        signOut: jest.fn(),
    };
    const wrapper = mount(<ProfileComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('profile component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('dropdown show')).toBe(true);
    });

    it('should handle sign out button', () => {
        const { props, wrapper } = setup(true);
        wrapper.find('button').at(1).simulate('click');

        expect(props.signOut.mock.calls.length).toBe(1);
    });
});
