import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user0 } from './../../../__tests_constants__';

import { ProfileDropDownComponent } from './../ProfileDropDown';

configure({ adapter: new Adapter() });

const setup = (signedIn, isShallow) => {
    const props = {
        user: signedIn ? user0 : {
            id: '',
        },
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
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
        expect(wrapper.find('button').at(1).text()).toBe('Edit profile');
        expect(wrapper.find('div').at(2).hasClass('dropdown-divider')).toBe(true);
        expect(wrapper.find('div').at(3).hasClass('dropdown-item')).toBe(true);
        expect(wrapper.find('button').at(2).hasClass('btn btn-outline-warning')).toBe(true);
        expect(wrapper.find('button').at(2).text()).toBe('Sign out');
        expect(wrapper.find('i').at(0).hasClass('fa fa-edit')).toBe(true);
        expect(wrapper.find('i').at(1).hasClass('fa fa-sign-out')).toBe(true);
    });

    it('should handle nav to edit profile on click', () => {
        const { props, wrapper } = setup(true);
        wrapper.find('button').at(1).simulate('click');

        expect(props.navToPath.mock.calls.length).toBe(1);
    });

    it('should handle sign out button, sign out and nav to home', () => {
        const { props, wrapper } = setup(true);
        wrapper.find('button').at(2).simulate('click');

        expect(props.signOut.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls[0][0]).toBe('/');
    });
});
