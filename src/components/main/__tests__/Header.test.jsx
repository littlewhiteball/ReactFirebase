import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { categoryList } from './../../../__tests_constants__';

import { HeaderComponent } from './../Header';
import ProfileDropDown from './../../users/ProfileDropDown';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        categoryList,
        navToPath: jest.fn(),
        getSignedInUser: jest.fn(),
    };
    const wrapper = shallow(<HeaderComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('header component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('header').hasClass('navbar navbar-expand-md navbar-dark bg-dark')).toBe(true);
        expect(wrapper.find('header').prop('role')).toBe('banner');
        expect(wrapper.find('Link').at(0).hasClass('navbar-brand')).toBe(true);
        expect(wrapper.find('Link').at(0).prop('to')).toBe('/');
        expect(wrapper.find('Link').at(0).prop('href')).toBe('/');
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
        expect(wrapper.find('div').at(1).hasClass('collapse navbar-collapse')).toBe(true);
        expect(wrapper.find('div').at(1).prop('id')).toBe('navCategoryList');
        expect(wrapper.find('ul').hasClass('navbar-nav mr-auto')).toBe(true);
        expect(wrapper.find('li').at(0).hasClass('nav-item')).toBe(true);
        expect(wrapper.find('li').at(0).key()).toBe('NFL');
        expect(wrapper.find('Link').at(1).hasClass('nav-link active')).toBe(true);
        expect(wrapper.find('Link').at(1).prop('to')).toBe('/nfl');
        expect(wrapper.find('Link').at(1).prop('href')).toBe('/nfl');
        expect(wrapper.find('span').at(2).text()).toBe('NFL');
        expect(wrapper.find('li').at(1).hasClass('nav-item')).toBe(true);
        expect(wrapper.find('li').at(1).key()).toBe('EPL');
        expect(wrapper.find('Link').at(2).hasClass('nav-link active')).toBe(true);
        expect(wrapper.find('Link').at(2).prop('href')).toBe('/epl');
        expect(wrapper.find('span').at(3).text()).toBe('EPL');
        expect(wrapper.find('div').at(2).hasClass('nav right-actions')).toBe(true);
        expect(wrapper.find('div').at(3).hasClass('')).toBe(true);
        expect(wrapper.find('input').hasClass('search-box pl-2')).toBe(true);
        expect(wrapper.find('input').prop('placeholder')).toBe('Search');
        expect(wrapper.find('input').prop('type')).toBe('text');
        expect(wrapper.find('button').at(1).hasClass('btn btn-primary search-btn mr-2')).toBe(true);
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
        expect(wrapper.find('i').hasClass('fa fa-search')).toBe(true);
    });

    it('initial state', () => {
        const expectedInitialState = {
            signedIn: false,
        };
        const { wrapper } = setup();

        expect(wrapper.state()).toEqual(expectedInitialState);
    });

    it('should render profile component when signed in', () => {
        const { wrapper } = setup();
        wrapper.setState({
            signedIn: true,
        });

        expect(wrapper.find('div').at(3).hasClass('nav right-actions')).toBe(true);
        expect(wrapper.find(ProfileDropDown).exists()).toBe(true);
        expect(wrapper.find('button').at(2).hasClass('btn btn-outline-info')).toBe(true);
        expect(wrapper.find('button').at(2).text()).toBe('New Competition');
    });

    it.skip('should handle search', () => {

    });

    it('should handle new competition button when signed in', () => {
        const { props, wrapper } = setup();
        wrapper.setState({
            signedIn: true,
        });
        wrapper.find('button').at(2).simulate('click');

        expect(props.navToPath.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls[0][0]).toBe('/competition');
    });

    it('should render login/register button when not signed in', () => {
        const { wrapper } = setup();
        wrapper.setState({
            signedIn: false,
        });

        expect(wrapper.find('button').at(2).hasClass('btn btn-outline-info')).toBe(true);
        expect(wrapper.find('button').at(2).text()).toBe('Login/Register');
    });

    it('should handle login/register button when not signed in', () => {
        const { props, wrapper } = setup();
        wrapper.setState({
            signedIn: false,
        });
        wrapper.find('button').at(2).simulate('click');

        expect(props.navToPath.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls[0][0]).toBe('/auth');
    });
});
