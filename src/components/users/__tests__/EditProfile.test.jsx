import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { user0 } from './../../../__tests_constants__';

import { EditProfileComponent } from './../EditProfile';

configure({ adapter: new Adapter() });

jest.mock('./../../../firebase');

const setup = (isShallow = false, signedIn = false) => {
    const props = {
        user: signedIn ? user0 : {
            id: '',
            name: undefined,
            email: undefined,
        },
        saveChange: jest.fn(),
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
        const { wrapper } = setup(false, true);

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
        expect(wrapper.find('div').at(8).hasClass('form-group row col-lg-6 offset-lg-3')).toBe(true);
        expect(wrapper.find('div').at(9).hasClass('text-center')).toBe(true);
        expect(wrapper.find('img').hasClass('rounded-circle')).toBe(true);
        expect(wrapper.find('img').prop('src')).toBe('favicon.ico');
        expect(wrapper.find('img').prop('height')).toBe('40');
        expect(wrapper.find('img').prop('width')).toBe('40');
        expect(wrapper.find('img').prop('alt')).toBe('Profile Photo');
        expect(wrapper.find('input').at(0).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('file');
        expect(wrapper.find('div').at(10).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(0).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(0).prop('htmlFor')).toBe('Name');
        expect(wrapper.find('label').at(0).text()).toBe('Name');
        expect(wrapper.find('div').at(11).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(1).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('text');
        expect(wrapper.find('input').at(1).prop('id')).toBe('Name');
        expect(wrapper.find('input').at(1).prop('placeholder')).toBe('Your name');
        expect(wrapper.find('div').at(12).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(1).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(1).prop('htmlFor')).toBe('Email');
        expect(wrapper.find('label').at(1).text()).toBe('Email');
        expect(wrapper.find('div').at(13).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(2).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(2).prop('type')).toBe('text');
        expect(wrapper.find('input').at(2).prop('id')).toBe('Email');
        expect(wrapper.find('input').at(2).prop('placeholder')).toBe('Your email');
        expect(wrapper.find('div').at(14).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('div').at(15).hasClass('col-lg-4 offset-lg-8 row')).toBe(true);
        expect(wrapper.find('button').at(0).hasClass('col-lg-6 form-control btn btn-primary')).toBe(true);
        expect(wrapper.find('button').at(0).text()).toBe('Save');
        expect(wrapper.find('button').at(1).hasClass('col-lg-6 form-control btn btn-default')).toBe(true);
        expect(wrapper.find('button').at(1).text()).toBe('Cancel');
    });

    it('should call props save change when clicked', () => {
        const { props, wrapper } = setup(false, true);
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        expect(props.saveChange.mock.calls.length).toBe(1);
    });
});
