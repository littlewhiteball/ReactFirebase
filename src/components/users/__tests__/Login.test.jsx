import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user0, emailUser0, emailUserNotFound0, emailUserNotFoundSignUp0 } from './../../../__tests_constants__';

import { LoginComponent } from './../Login';

configure({ adapter: new Adapter() });

jest.mock('./../../../firebase');

const setup = (isShallow = false, signedIn = false) => {
    const props = {
        userId: signedIn ? user0.id : undefined,
        getSignedInUser: jest.fn(),
        addSignedUpUser: jest.fn(),
    };
    const wrapper =
        isShallow ? shallow(<LoginComponent {...props} />) : mount(<LoginComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('login component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('form-signin')).toBe(true);
        expect(wrapper.find('div').at(2).hasClass('form-group')).toBe(true);
        expect(wrapper.find('h2').hasClass('form-signin-heading')).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Please sign in');
        expect(wrapper.find('i').hasClass('fa fa-exclamation-triangle fa-3')).toBe(true);
        expect(wrapper.find('small').text()).toBe('If you do not have an account already. This will create your account');
        expect(wrapper.find('div').at(3).hasClass('form-group')).toBe(true);
        expect(wrapper.find('input').at(0).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('email');
        expect(wrapper.find('input').at(0).prop('placeholder')).toBe('Email');
        expect(wrapper.find('div').at(4).hasClass('form-group')).toBe(true);
        expect(wrapper.find('input').at(1).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('password');
        expect(wrapper.find('input').at(1).prop('placeholder')).toBe('Password');
        expect(wrapper.find('div').at(5).hasClass('form-group')).toBe(true);
        expect(wrapper.find('div').at(6).hasClass('form-check-inline')).toBe(true);
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
        expect(wrapper.find('button').at(0).text()).toBe('Sign in');
        expect(wrapper.find('div').at(7).hasClass('text-center')).toBe(true);
        expect(wrapper.find('button').at(1).hasClass('btn btn-social-icon btn-google ml-1 mr-1')).toBe(true);
        expect(wrapper.find('span').at(0).hasClass('fa fa-google')).toBe(true);
        expect(wrapper.find('button').at(2).hasClass('btn btn-social-icon btn-facebook ml-1 mr-1')).toBe(true);
        expect(wrapper.find('span').at(1).hasClass('fa fa-facebook')).toBe(true);
        expect(wrapper.find('button').at(3).hasClass('btn btn-social-icon btn-twitter ml-1 mr-1')).toBe(true);
        expect(wrapper.find('span').at(2).hasClass('fa fa-twitter')).toBe(true);
    });

    it('initial state', () => {
        const { wrapper } = setup();

        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');
    });

    it('should handle email change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'email',
                value: 'email@me.com',
            },
        });

        expect(wrapper.state('email')).toEqual('email@me.com');
    });

    it('should handle password change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'password',
                value: 'password123',
            },
        });

        expect(wrapper.state('password')).toEqual('password123');
    });

    it.skip('should validate email and password', () => {

    });

    it('should call props get signed in user when signed in with email and password', () => {
        const { props, wrapper } = setup();
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'email',
                value: emailUser0.email,
            },
        });
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'password',
                value: emailUser0.password,
            },
        });
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        // the click handler calls an async method which returns a promise.
        // we have to wait for the resolved promise callback before we can expect.
        // the following code relies on the fact that -
        // setImmediate callback is resolved slower than the one inside click handler
        // https://github.com/airbnb/enzyme/issues/823 comment by jwbay
        setImmediate(() => {
            expect(props.getSignedInUser.mock.calls.length).toBe(1);
            expect(props.getSignedInUser.mock.calls[0][0]).toBe(emailUser0.uid);
        });
    });

    it('should call props add signed up user when sign in with not found email record', () => {
        const { props, wrapper } = setup();
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'email',
                value: emailUserNotFound0.email,
            },
        });
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'password',
                value: emailUserNotFound0.password,
            },
        });
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        setImmediate(() => {
            expect(props.addSignedUpUser.mock.calls.length).toBe(1);
            expect(props.addSignedUpUser.mock.calls[0][0]).toBe(emailUserNotFoundSignUp0);
        });
    });

    it.skip('should fail sign in with email and password', () => {

    });

    it.skip('should fail sign up with not found email', () => {

    });

    it.skip('should call props sign in with google once clicked', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(1).simulate('click', { preventDefault() { } });

        expect(props.signInWithGoogle.mock.calls.length).toBe(1);
    });

    it.skip('should call props sign in with facebook once clicked', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(2).simulate('click', { preventDefault() { } });

        expect(props.signInWithFacebook.mock.calls.length).toBe(1);
    });

    it.skip('should call props sign in with twitter once clicked', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(3).simulate('click', { preventDefault() { } });

        expect(props.signInWithTwitter.mock.calls.length).toBe(1);
    });

    it('should render redirect when use has signed in', () => {
        const { wrapper } = setup(true, true);

        expect(wrapper.find('Redirect').prop('to')).toEqual({ pathname: '/' });
    });
});
