import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from './../Login';

configure({ adapter: new Adapter() });

const wrapper = mount(<Login />);

describe('login component', () => {
    it('should render self', () => {
        expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('form').hasClass('form-signin')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('form-group')).toBe(true);
        expect(wrapper.find('h2').hasClass('form-signin-heading')).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Please sign in');
        expect(wrapper.find('i').hasClass('fa fa-exclamation-triangle fa-3')).toBe(true);
        expect(wrapper.find('small').text()).toBe('If you do not have an account already. This will create your account');
        expect(wrapper.find('div').at(2).hasClass('form-group')).toBe(true);
        expect(wrapper.find('input').at(0).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('email');
        expect(wrapper.find('input').at(0).prop('placeholder')).toBe('Email');
        expect(wrapper.find('div').at(3).hasClass('form-group')).toBe(true);
        expect(wrapper.find('input').at(1).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('password');
        expect(wrapper.find('input').at(1).prop('placeholder')).toBe('Password');
        expect(wrapper.find('div').at(4).hasClass('form-group')).toBe(true);
        expect(wrapper.find('div').at(5).hasClass('form-check-inline')).toBe(true);
        expect(wrapper.find('label').hasClass('form-check-label')).toBe(true);
        expect(wrapper.find('label').prop('htmlFor')).toBe('chkRememberMe');
        expect(wrapper.find('label').text()).toBe('Remember me');
        expect(wrapper.find('input').at(2).hasClass('form-check-input')).toBe(true);
        expect(wrapper.find('input').at(2).prop('type')).toBe('checkbox');
        expect(wrapper.find('input').at(2).prop('id')).toBe('chkRememberMe');
        expect(wrapper.find('a').hasClass('float-right')).toBe(true);
        expect(wrapper.find('a').prop('href')).toBe('/');
        expect(wrapper.find('a').text()).toBe('Forgot password?');
        expect(wrapper.find('button').at(0).hasClass('btn btn-primary btn-block mb-2')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('submit');
        expect(wrapper.find('button').at(0).text()).toBe('Sign in');
        expect(wrapper.find('div').at(6).hasClass('text-center')).toBe(true);
        expect(wrapper.find('button').at(1).hasClass('btn btn-social-icon btn-google ml-1 mr-1')).toBe(true);
        expect(wrapper.find('span').at(0).hasClass('fa fa-google')).toBe(true);
        expect(wrapper.find('button').at(2).hasClass('btn btn-social-icon btn-facebook ml-1 mr-1')).toBe(true);
        expect(wrapper.find('span').at(1).hasClass('fa fa-facebook')).toBe(true);
        expect(wrapper.find('button').at(3).hasClass('btn btn-social-icon btn-twitter ml-1 mr-1')).toBe(true);
        expect(wrapper.find('span').at(2).hasClass('fa fa-twitter')).toBe(true);
    });
});