import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import { AddCompetitionFormComponent } from './../AddCompetitionForm';

// DateTimePicker component has to be mocked as it can't be mount rendered.
jest.mock('./../../utilities/DateTimePicker', () => ('datetimepicker'));

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        userId: testConstants.user0.id,
        saveChange: jest.fn(() =>
            new Promise((resolve) => {
                resolve();
            })),
        navToPath: jest.fn(),
    };

    const wrapper = mount(<AddCompetitionFormComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('add competition form component', () => {
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
        expect(wrapper.find('h3').text()).toBe('Competition Information');
        expect(wrapper.find('div').at(7).hasClass('card-block')).toBe(true);
        expect(wrapper.find('form').hasClass('needs-validation')).toBe(true);
        expect(wrapper.find('form').prop('autoComplete')).toBe('off');
        expect(wrapper.find('form').prop('noValidate')).toBe(true);
        expect(wrapper.find('div').at(8).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(0).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(0).prop('htmlFor')).toBe('Title');
        expect(wrapper.find('label').at(0).text()).toBe('Title');
        expect(wrapper.find('div').at(9).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(0).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('text');
        expect(wrapper.find('input').at(0).prop('id')).toBe('Title');
        expect(wrapper.find('input').at(0).prop('placeholder')).toBe('Competition title');
        expect(wrapper.find('input').at(0).prop('required')).toBe(true);
        expect(wrapper.find('input').at(0).prop('maxLength')).toBe(256);
        expect(wrapper.find('div').at(10).hasClass('invalid-feedback')).toBe(true);
        expect(wrapper.find('div').at(10).text()).toBe('Please provide a title for your competition');
        expect(wrapper.find('div').at(11).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(1).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(1).prop('htmlFor')).toBe('Description');
        expect(wrapper.find('label').at(1).text()).toBe('Description (Optional)');
        expect(wrapper.find('div').at(12).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(1).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('text');
        expect(wrapper.find('input').at(1).prop('id')).toBe('Description');
        expect(wrapper.find('input').at(1).prop('placeholder')).toBe('Competition description');
        expect(wrapper.find('div').at(13).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(2).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(2).prop('htmlFor')).toBe('Visibility');
        expect(wrapper.find('label').at(2).text()).toBe('Visibility');
        expect(wrapper.find('div').at(14).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(2).hasClass('mr-1')).toBe(true);
        expect(wrapper.find('input').at(2).prop('name')).toBe('Visibility');
        expect(wrapper.find('input').at(2).prop('type')).toBe('radio');
        expect(wrapper.find('input').at(2).prop('id')).toBe('Public');
        expect(wrapper.find('input').at(2).prop('defaultChecked')).toBe(true);
        expect(wrapper.find('label').at(3).hasClass('mr-2')).toBe(true);
        expect(wrapper.find('label').at(3).prop('htmlFor')).toBe('Public');
        expect(wrapper.find('label').at(3).text()).toBe('Public');
        expect(wrapper.find('input').at(3).prop('name')).toBe('Visibility');
        expect(wrapper.find('input').at(3).hasClass('mr-1')).toBe(true);
        expect(wrapper.find('input').at(3).prop('type')).toBe('radio');
        expect(wrapper.find('input').at(3).prop('id')).toBe('Private');
        expect(wrapper.find('input').at(3).prop('checked')).toBe(undefined);
        expect(wrapper.find('label').at(4).prop('htmlFor')).toBe('Private');
        expect(wrapper.find('label').at(4).text()).toBe('Private');
        expect(wrapper.find('div').at(15).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(5).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(5).prop('htmlFor')).toBe('EntriesClose');
        expect(wrapper.find('label').at(5).text()).toBe('Entries Close');
        expect(wrapper.find('div').at(16).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('datetimepicker').exists()).toBe(true);
        expect(wrapper.find('div').at(17).hasClass('invalid-feedback')).toBe(true);
        expect(wrapper.find('div').at(17).text()).toBe('Please provide a valid datetime in the format of MM/dd/yyyy hh:mm AM/PM');
        expect(wrapper.find('div').at(18).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(6).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(6).prop('htmlFor')).toBe('FulfillmentDate');
        expect(wrapper.find('label').at(6).text()).toBe('Fulfillment Date');
        expect(wrapper.find('div').at(19).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('datetimepicker').exists()).toBe(true);
        expect(wrapper.find('div').at(20).hasClass('invalid-feedback')).toBe(true);
        expect(wrapper.find('div').at(20).text()).toBe('Please provide a valid datetime in the format of MM/dd/yyyy hh:mm AM/PM');
        expect(wrapper.find('div').at(21).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(7).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(7).prop('htmlFor')).toBe('Options');
        expect(wrapper.find('label').at(7).text()).toBe('Options');
        expect(wrapper.find('div').at(22).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(4).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(4).prop('type')).toBe('text');
        expect(wrapper.find('input').at(4).prop('id')).toBe('Options');
        expect(wrapper.find('input').at(4).prop('placeholder')).toBe('Option1,Option2');
        expect(wrapper.find('input').at(4).prop('required')).toBe(true);
        expect(wrapper.find('input').at(4).prop('pattern')).toBe('^\\S*$');
        expect(wrapper.find('div').at(23).hasClass('invalid-feedback')).toBe(true);
        expect(wrapper.find('div').at(23).text()).toBe('Please provide a list of comma separated options without whitespaces');
        expect(wrapper.find('div').at(24).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('div').at(25).hasClass('col-lg-4 offset-lg-8 row')).toBe(true);
        expect(wrapper.find('button').at(0).hasClass('col-lg-6 form-control btn btn-primary')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('submit');
        expect(wrapper.find('button').at(0).text()).toBe('Save');
        expect(wrapper.find('button').at(1).hasClass('col-lg-6 form-control btn btn-default')).toBe(true);
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
        expect(wrapper.find('button').at(1).text()).toBe('Cancel');
    });

    it('should render spinner on save button if saving state is set to true', () => {
        const { wrapper } = setup();
        wrapper.setState({
            saving: true,
        });

        expect(wrapper.find('i').hasClass('fa fa-spinner fa-spin')).toBe(true);
    });

    it('initial state', () => {
        const expectedState = {
            formClass: 'needs-validation',
            saving: false,
            title: '',
            description: '',
            visibility: 'Public',
            start: testConstants.dateTimeNow,
            entriesClose: testConstants.dateTimeAddOneDay,
            fulfillment: testConstants.dateTimeAddTwoDays,
            options: [],
        };
        const { wrapper } = setup();

        expect(wrapper.state()).toEqual(expectedState);
    });

    it('should handle title change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'text',
                value: 'competition 0',
            },
        });

        expect(wrapper.state('title')).toEqual('competition 0');
    });

    it('should handle description change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'text',
                value: 'competition 0 description',
            },
        });

        expect(wrapper.state('description')).toEqual('competition 0 description');
    });

    it('should handle visibility change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(3).simulate('change', {
            target: {
                name: 'text',
                value: 'Private',
            },
        });

        expect(wrapper.state('visibility')).toEqual('Private');
    });

    it('should handle options change', () => {
        const { wrapper } = setup();
        wrapper.find('input').at(4).simulate('change', {
            target: {
                name: 'text',
                value: 'option1,option2',
            },
        });

        expect(wrapper.state('options')).toEqual(['option1', 'option2']);
    });

    it('should set saving state when save is clicked and form is validated', () => {
        const { wrapper } = setup();
        wrapper.find('button').at(0).simulate('submit', {
            target: {
                name: 'form',
                checkValidity: () => true,
            },
        });

        expect(wrapper.state('saving')).toBe(true);
    });

    it('should set formClass state to was-validated and not save change when save is clicked but form is not validated', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(0).simulate('submit', {
            target: {
                name: 'form',
                checkValidity: () => false,
            },
        });

        expect(wrapper.state('formClass')).toBe('was-validated');
        expect(wrapper.state('saving')).toBe(false);
        expect(props.saveChange.mock.calls.length).toBe(0);
    });

    it('should call props save change when save is clicked', () => {
        const expectedArguments = {
            title: 'competition 0',
            description: 'competition 0 description',
            visibility: 'Public',
            options: ['option1', 'option2'],
            createdBy: testConstants.user0.id,
            owner: testConstants.user0.id,
            start: testConstants.dateTimeNow.getTime(),
            closing: testConstants.dateTimeAddOneDay.getTime(),
            fulfillment: testConstants.dateTimeAddTwoDays.getTime(),
        };
        const { props, wrapper } = setup();
        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'text',
                value: 'competition 0',
            },
        });
        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'text',
                value: 'competition 0 description',
            },
        });
        wrapper.find('input').at(4).simulate('change', {
            target: {
                name: 'text',
                value: 'option1,option2',
            },
        });
        wrapper.find('button').at(0).simulate('submit', {
            target: {
                name: 'form',
                checkValidity: () => true,
            },
        });

        expect(props.saveChange.mock.calls.length).toBe(1);
        expect(props.saveChange.mock.calls[0][0]).toEqual(expectedArguments);
    });

    it('should call props nav to home after save succeeded', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(0).simulate('submit', {
            target: {
                name: 'form',
                checkValidity: () => true,
            },
        });

        expect(props.saveChange.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls[0][0]).toBe('/');
    });

    it('should call props nav to home after cancel is clicked', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(1).simulate('click', { preventDefault() { } });

        expect(props.navToPath.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls[0][0]).toBe('/');
    });
});
