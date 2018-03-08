import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import { EditProfileComponent } from './../EditProfile';

configure({ adapter: new Adapter() });

jest.mock('./../../../firebase');
jest.mock('./../../../database/storageAdapter');

const setup = (isShallow = false, saveChangeSucceeds = true) => {
    const props = {
        user: testConstants.user0,
        saveChange: jest.fn(() =>
            new Promise((resolve, reject) => {
                if (saveChangeSucceeds) {
                    resolve();
                } else {
                    const error = new Error('save changes failed on firebase');
                    reject(error);
                }
            })),
    };
    const wrapper = isShallow
        ? shallow(<EditProfileComponent {...props} />)
        : mount(<EditProfileComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('edit profile component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('col-md-12')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('row')).toBe(true);
        expect(wrapper.find('div').at(2).hasClass('col-md-12')).toBe(true);
        expect(wrapper.find('div').at(3).hasClass('row')).toBe(true);
        expect(wrapper.find('div').at(4).hasClass('col-md-8 offset-md-2')).toBe(true);
        expect(wrapper.find('span').hasClass('anchor')).toBe(true);
        expect(wrapper.find('hr').hasClass('my-2')).toBe(true);
        expect(wrapper.find('div').at(5).hasClass('card-outline-secondary')).toBe(true);
        expect(wrapper.find('div').at(6).hasClass('card-header mb-2')).toBe(true);
        expect(wrapper.find('h3').text()).toBe('Edit Profile - name0');
        expect(wrapper.find('div').at(7).hasClass('card-block')).toBe(true);
        expect(wrapper.find('form').hasClass('form')).toBe(true);
        expect(wrapper.find('form').prop('autoComplete')).toBe('off');
        expect(wrapper.find('div').at(8).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('div').at(9).hasClass('text-center')).toBe(true);
        expect(wrapper.find('img').hasClass('rounded-circle col-1 offset-1')).toBe(true);
        expect(wrapper.find('img').prop('src')).toBe('https://firebasestorage.googleapis.com/v0/blabla/profilePhoto1.jpg?token=token1');
        expect(wrapper.find('img').prop('height')).toBe('40');
        expect(wrapper.find('img').prop('width')).toBe('40');
        expect(wrapper.find('img').prop('alt')).toBe('/favicon.ico');
        expect(wrapper.find('input').at(0).hasClass('form-control col-6')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('file');
        expect(wrapper.find('button').at(0).hasClass('form-control btn btn-sm btn-info col-2 ml-2')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('button');
        expect(wrapper.find('div').at(10).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(0).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(0).prop('htmlFor')).toBe('Name');
        expect(wrapper.find('label').at(0).text()).toBe('Name');
        expect(wrapper.find('div').at(11).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(1).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('text');
        expect(wrapper.find('input').at(1).prop('id')).toBe('Name');
        expect(wrapper.find('input').at(1).prop('value')).toBe('name0');
        expect(wrapper.find('div').at(12).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(1).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(1).prop('htmlFor')).toBe('Email');
        expect(wrapper.find('label').at(1).text()).toBe('Email');
        expect(wrapper.find('div').at(13).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(2).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(2).prop('type')).toBe('text');
        expect(wrapper.find('input').at(2).prop('id')).toBe('Email');
        expect(wrapper.find('input').at(2).prop('value')).toBe('email0@me0.com');
        expect(wrapper.find('div').at(14).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('div').at(15).hasClass('col-md-4 offset-md-8 row')).toBe(true);
        expect(wrapper.find('button').at(1).hasClass('col-md-4 btn btn-primary')).toBe(true);
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
        expect(wrapper.find('button').at(1).text()).toBe('Save');
        expect(wrapper.find('button').at(2).hasClass('col-md-4 ml-2 btn btn-default')).toBe(true);
        expect(wrapper.find('button').at(2).prop('type')).toBe('button');
        expect(wrapper.find('button').at(2).text()).toBe('Cancel');
        expect(wrapper.find('i').exists()).toBe(false);
    });

    it('initial state', () => {
        const expectedState = {
            saving: false,
            name: 'name0',
            email: 'email0@me0.com',
            profilePhoto: '',
            profilePhotoDownloadURL: testConstants.user0.photoUrl,
        };
        const { wrapper } = setup();

        expect(wrapper.state()).toEqual(expectedState);
    });

    it('should handle profile photo change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'file',
                files: [testConstants.profilePhotoFile],
            },
        });

        expect(wrapper.state('profilePhoto')).toEqual(testConstants.profilePhotoFile);
    });

    it('should handle profile photo upload, and set profilePhotoDownloadURL state', () => {
        const { wrapper } = setup();
        wrapper.setState({
            profilePhoto: testConstants.profilePhotoFile,
        });
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        setImmediate(() => {
            expect(wrapper.state('profilePhotoDownloadURL')).toBe(testConstants.profilePhotoFromStorage1.downloadURL);
        });
    });

    it('should handle name change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'text',
                value: 'new name',
            },
        });

        expect(wrapper.state('name')).toBe('new name');
    });

    it('should handle email change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(2).simulate('change', {
            target: {
                name: 'email',
                value: 'newemail@me.com',
            },
        });

        expect(wrapper.state('email')).toBe('newemail@me.com');
    });

    it('should add spinner when saving state is true', () => {
        const { wrapper } = setup();
        wrapper.setState({
            saving: true,
        });

        expect(wrapper.state('saving')).toBe(true);
        expect(wrapper.find('i').hasClass('fa fa-spinner fa-spin')).toBe(true);
    });

    it('should remove spinner when saving state is false', () => {
        const { wrapper } = setup();
        wrapper.setState({
            saving: false,
        });

        expect(wrapper.state('saving')).toBe(false);
        expect(wrapper.find('i').exists()).toBe(false);
    });

    it('should call props save change with updated user name when save clicked', () => {
        const expectedArg = Object.assign({}, testConstants.user0, {
            name: 'new name',
        });
        const { props, wrapper } = setup();
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'text',
                value: 'new name',
            },
        });
        wrapper.find('button').at(1).simulate('click', { preventDefault() { } });

        expect(props.saveChange.mock.calls.length).toBe(1);
        expect(props.saveChange.mock.calls[0][0]).toEqual(expectedArg);
    });

    it('should set saving state when save is clicked, then reset saving state after save completes', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'text',
                value: 'new name',
            },
        });
        wrapper.find('button').at(1).simulate('click', { preventDefault() { } });

        expect(wrapper.state('saving')).toBe(true);
        expect(wrapper.find('i').hasClass('fa fa-spinner fa-spin'));

        // wait for save change to complete asynchronously
        setImmediate(() => {
            expect(wrapper.state('saving')).toBe(false);
            // TODO: figure out how to expect spinner component to not exists
        });
    });

    it('should set saving state, fail on save changes, then reset saving state', () => {
        const { wrapper } = setup(false, false);
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'text',
                value: 'new name',
            },
        });
        wrapper.find('button').at(1).simulate('click', { preventDefault() { } });

        expect(wrapper.state('saving')).toBe(true);
        expect(wrapper.find('i').hasClass('fa fa-spinner fa-spin'));

        // wait for save change to complete asynchronously
        setImmediate(() => {
            expect(wrapper.state('saving')).toBe(false);
            // TODO: figure out how to expect spinner component to not exists
        });
    });

    it.skip('should cancel changes', () => {

    });
});
