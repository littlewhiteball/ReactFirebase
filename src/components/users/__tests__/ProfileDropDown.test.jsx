import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user } from './../../../__tests_constants__';

import { ProfileDropDownComponent } from './../ProfileDropDown';

configure({ adapter: new Adapter() });

const setup = (signedIn, isShallow) => {
    const props = {
        user: Object.assign({}, user, {
            signedIn,
        }),
        navToPath: jest.fn(),
        signOut: jest.fn(),
    };
    const wrapper =
        isShallow ?
            shallow(<ProfileDropDownComponent {...props} />) :
            mount(<ProfileDropDownComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('profile component', () => {
    it('should render profile menus when signed in', () => {
        const { wrapper } = setup(true);

        expect(wrapper.find('div').at(0).hasClass('dropdown show')).toBe(true);
        expect(wrapper.find('button').at(0).hasClass('btn btn-default dropdown-toggle')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('button');
        expect(wrapper.find('button').at(0).prop('data-toggle')).toBe('dropdown');
        expect(wrapper.find('img').prop('src')).toBe('./favicon.ico');
        expect(wrapper.find('img').prop('width')).toBe('28');
        expect(wrapper.find('img').prop('height')).toBe('28');
        expect(wrapper.find('img').prop('alt')).toBe('Profile');
        expect(wrapper.find('div').at(1).hasClass('dropdown-menu')).toBe(true);
        expect(wrapper.find('button').at(1).hasClass('dropdown-item')).toBe(true);
        expect(wrapper.find('button').at(1).text()).toBe('Edit profile');
        expect(wrapper.find('div').at(2).hasClass('dropdown-divider')).toBe(true);
        expect(wrapper.find('div').at(3).hasClass('dropdown-item')).toBe(true);
        expect(wrapper.find('button').at(2).hasClass('btn btn-outline-warning')).toBe(true);
        expect(wrapper.find('button').at(2).text()).toBe('Sign out');
    });

    it('should handle nav to edit profile on click', () => {
        const { props, wrapper } = setup(true);
        wrapper.find('button').at(1).simulate('click');

        expect(props.navToPath.mock.calls.length).toBe(1);
    });

    it('should handle sign out button', () => {
        const { props, wrapper } = setup(true);
        wrapper.find('button').at(2).simulate('click');

        expect(props.signOut.mock.calls.length).toBe(1);
    });

    it('should render redirect home when not signed in', () => {
        const { wrapper } = setup(false, true);

        expect(wrapper.find('Redirect').prop('to')).toEqual({ pathname: '/' });
    });
});
