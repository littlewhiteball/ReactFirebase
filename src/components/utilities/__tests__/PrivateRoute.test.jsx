import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Redirect } from 'react-router-dom';

import * as testConstants from './../../../__tests_constants__';

import firebase from './../../../firebase';

import { PrivateRouteComponent } from './../PrivateRoute';

configure({ adapter: new Adapter() });

const setup = (args = { isShallow: true, path: undefined, redirectTo: undefined }) => {
    const props = {
        component: testConstants.MockComponent,
        location: {
            hash: '',
            pathname: '/',
            search: '',
            state: undefined,
        },
        getSignedInUser: jest.fn(),
    };
    if (args.path !== undefined) {
        props.rest = [{ path: '/testPath' }];
    }
    if (args.redirectTo !== undefined) {
        props.redirectTo = args.redirectTo;
    }
    const wrapper = args.isShallow === undefined || args.isShallow ?
        shallow(<PrivateRouteComponent {...props} />) :
        mount(<PrivateRouteComponent {...props} />);
    return {
        props, wrapper,
    };
};

describe('private route component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('i').hasClass('fa fa-spinner fa-10x')).toBe(true);
    });

    it('initial state', () => {
        const { wrapper } = setup();

        expect(wrapper.state()).toEqual({
            loading: true,
            signedIn: false,
        });
    });

    it('componentWillMount should change state and call props getSignedInUser when signed in', () => {
        // with jest.spyOn, we can mock different logic in different test cases
        const spy = jest.spyOn(firebase, 'auth')
            .mockImplementation(() => ({
                onAuthStateChanged: (callback) => {
                    callback({
                        uid: 'id0id0id0id0id0id0id0id0id0+',
                    });
                },
            }));
        const { props, wrapper } = setup();

        expect(spy).toHaveBeenCalled();
        expect(wrapper.state('loading')).toBe(false);
        expect(wrapper.state('signedIn')).toBe(true);
        expect(props.getSignedInUser.mock.calls.length).toBe(1);
        expect(props.getSignedInUser.mock.calls[0][0]).toEqual(testConstants.emailUser0.uid);
    });

    it('componentWillMount should change state and not call props getSignedInUser when not signed in', () => {
        const spy = jest.spyOn(firebase, 'auth')
            .mockImplementation(() => ({
                onAuthStateChanged: (callback) => {
                    callback(undefined);
                },
            }));
        const { props, wrapper } = setup();

        expect(spy).toHaveBeenCalled();
        expect(wrapper.state('loading')).toBe(false);
        expect(wrapper.state('signedIn')).toBe(false);
        expect(props.getSignedInUser.mock.calls.length).toBe(0);
    });

    it('should have default props', () => {
        const { wrapper } = setup();

        expect(wrapper.instance().props.rest).toEqual([]);
        expect(wrapper.instance().props.redirectTo).toEqual('/auth');
    });

    it('should use passed in pros', () => {
        const { wrapper } = setup({ path: '/testPath', redirectTo: '/redirect' });

        expect(wrapper.instance().props.rest).toEqual([{ path: '/testPath' }]);
        expect(wrapper.instance().props.redirectTo).toEqual('/redirect');
    });

    it('should render route with component when loading state is false and signedIn state is true', () => {
        const { props, wrapper } = setup({ path: '/testPath' });
        wrapper.setState({
            loading: false,
            signedIn: true,
        });

        expect(wrapper.find('i').exists()).toBe(false);
        expect(wrapper.find(Route).exists()).toBe(true);
        expect(wrapper.find(Route).props()[0]).toEqual({ path: '/testPath' });
        expect(wrapper.find(Route).prop('render')().type).toEqual(props.component);
        expect(wrapper.find(Route).prop('render')().props.rest).toEqual([{ path: '/testPath' }]);
    });

    it('should render route with redirect to auth page when loading state is false and signedIn state is false', () => {
        const { wrapper } = setup({ path: '/testPath' });
        wrapper.setState({
            loading: false,
            signedIn: false,
        });

        expect(wrapper.find('i').exists()).toBe(false);
        expect(wrapper.find(Route).exists()).toBe(true);
        expect(wrapper.find(Route).props()[0]).toEqual({ path: '/testPath' });

        const routeProps = {
            location: {
                hash: '',
                pathname: '/path',
                search: '',
            },
        };
        const expectedRedirectTo = {
            pathname: '/auth',
            state: {
                from: {
                    hash: '',
                    pathname: '/path',
                    search: '',
                },
            },
        };
        expect(wrapper.find(Route).prop('render')(routeProps).type).toEqual(Redirect);
        expect(wrapper.find(Route).prop('render')(routeProps).props.to).toEqual(expectedRedirectTo);
    });
});
