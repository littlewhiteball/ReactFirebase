import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user, categoryList } from './../../../__tests_constants__';

import { HeaderComponent } from './../Header';

configure({ adapter: new Adapter() });

const setup = (signedIn) => {
    const props = {
        user: Object.assign({}, user, {
            signedIn,
        }),
        categoryList,
        signOut: jest.fn(),
    };
    const wrapper = mount(<HeaderComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('header component', () => {
    it('should render self', () => {
        const { wrapper } = setup(false);

        expect(wrapper.find('header').hasClass('navbar navbar-expand-md navbar-dark bg-dark')).toBe(true);
        expect(wrapper.find('header').prop('role')).toBe('banner');
        expect(wrapper.find('a').at(0).hasClass('navbar-brand')).toBe(true);
        expect(wrapper.find('a').at(0).prop('href')).toBe('/');
        expect(wrapper.find('img').prop('src')).toBe('/favicon.ico');
        expect(wrapper.find('img').prop('alt')).toBe('Ga');
        expect(wrapper.find('img').prop('width')).toBe('36');
        expect(wrapper.find('img').prop('height')).toBe('36');
        expect(wrapper.find('span').at(0).text()).toBe('Home');
        expect(wrapper.find('button').at(0).hasClass('navbar-toggler collapsed')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('button');
        expect(wrapper.find('button').at(0).prop('data-toggle')).toBe('collapse');
        expect(wrapper.find('button').at(0).prop('data-target')).toBe('#navCategoryList');
        expect(wrapper.find('span').at(1).hasClass('navbar-toggler-icon')).toBe(true);
        expect(wrapper.find('div').hasClass('collapse navbar-collapse')).toBe(true);
        expect(wrapper.find('div').prop('id')).toBe('navCategoryList');
        expect(wrapper.find('ul').hasClass('navbar-nav mr-auto')).toBe(true);
        expect(wrapper.find('li').at(0).hasClass('nav-item')).toBe(true);
        expect(wrapper.find('li').at(0).key()).toBe('NFL');
        expect(wrapper.find('a').at(1).hasClass('nav-link active')).toBe(true);
        expect(wrapper.find('a').at(1).prop('href')).toBe('/nfl');
        expect(wrapper.find('a').at(1).text()).toBe('NFL');
        expect(wrapper.find('li').at(1).hasClass('nav-item')).toBe(true);
        expect(wrapper.find('li').at(1).key()).toBe('EPL');
        expect(wrapper.find('a').at(2).hasClass('nav-link active')).toBe(true);
        expect(wrapper.find('a').at(2).prop('href')).toBe('/epl');
        expect(wrapper.find('a').at(2).text()).toBe('EPL');
    });

    it('should render sign out button when signed in', () => {
        const { wrapper } = setup(true);

        expect(wrapper.find('button').at(1).hasClass('btn btn-outline-warning')).toBe(true);
        expect(wrapper.find('button').at(1).text()).toBe('Sign out');
    });

    it('should render login/register button when not signed in', () => {
        const { wrapper } = setup(false);

        expect(wrapper.find('a').at(3).hasClass('btn btn-outline-info')).toBe(true);
        expect(wrapper.find('a').at(3).prop('href')).toBe('/auth');
        expect(wrapper.find('a').at(3).prop('role')).toBe('button');
        expect(wrapper.find('a').at(3).text()).toBe('Login/Register');
    });

    it('should handle sign out button', () => {
        const { props, wrapper } = setup(true);
        wrapper.find('button').at(1).simulate('click');

        expect(props.signOut.mock.calls.length).toBe(1);
    });
});
