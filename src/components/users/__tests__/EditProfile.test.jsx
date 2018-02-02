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
    it.skip('should render self', () => {

    });

    it('should call props save change when clicked', () => {
        const { props, wrapper } = setup(false, true);
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        expect(props.saveChange.mock.calls.length).toBe(1);
    });
});
