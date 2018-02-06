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
        saveChange: jest.fn(),
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
        expect(wrapper.find('form').hasClass('form')).toBe(true);
        expect(wrapper.find('form').prop('autoComplete')).toBe('off');
        expect(wrapper.find('div').at(8).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(0).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(0).prop('htmlFor')).toBe('Title');
        expect(wrapper.find('label').at(0).text()).toBe('Title');
        expect(wrapper.find('div').at(9).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(0).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(0).prop('type')).toBe('text');
        expect(wrapper.find('input').at(0).prop('id')).toBe('Title');
        expect(wrapper.find('input').at(0).prop('placeholder')).toBe('Competition title');
        expect(wrapper.find('div').at(10).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(1).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(1).prop('htmlFor')).toBe('Description');
        expect(wrapper.find('label').at(1).text()).toBe('Description');
        expect(wrapper.find('div').at(11).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(1).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(1).prop('type')).toBe('text');
        expect(wrapper.find('input').at(1).prop('id')).toBe('Description');
        expect(wrapper.find('input').at(1).prop('placeholder')).toBe('Competition description');
        expect(wrapper.find('div').at(12).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(2).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(2).prop('htmlFor')).toBe('Visibility');
        expect(wrapper.find('label').at(2).text()).toBe('Visibility');
        expect(wrapper.find('div').at(13).hasClass('col-lg-9')).toBe(true);
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
        expect(wrapper.find('div').at(14).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(5).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(5).prop('htmlFor')).toBe('EntriesClose');
        expect(wrapper.find('label').at(5).text()).toBe('Entries Close');
        expect(wrapper.find('div').at(15).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('datetimepicker').exists()).toBe(true);
        expect(wrapper.find('div').at(16).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(6).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(6).prop('htmlFor')).toBe('FulfillmentDate');
        expect(wrapper.find('label').at(6).text()).toBe('Fulfillment Date');
        expect(wrapper.find('div').at(17).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('datetimepicker').exists()).toBe(true);
        expect(wrapper.find('div').at(18).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(7).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(7).prop('htmlFor')).toBe('Options');
        expect(wrapper.find('label').at(7).text()).toBe('Options');
        expect(wrapper.find('div').at(19).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(4).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(4).prop('type')).toBe('text');
        expect(wrapper.find('input').at(4).prop('id')).toBe('Options');
        expect(wrapper.find('input').at(4).prop('placeholder')).toBe('Option1,Option2');
        expect(wrapper.find('div').at(20).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('div').at(21).hasClass('col-lg-4 offset-lg-8 row')).toBe(true);
        expect(wrapper.find('button').at(0).hasClass('col-lg-6 form-control btn btn-primary')).toBe(true);
        expect(wrapper.find('button').at(0).prop('type')).toBe('button');
        expect(wrapper.find('button').at(0).text()).toBe('Save');
        expect(wrapper.find('button').at(1).hasClass('col-lg-6 form-control btn btn-default')).toBe(true);
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
        expect(wrapper.find('button').at(1).text()).toBe('Cancel');
    });

    it('initial state', () => {
        const { wrapper } = setup();

        expect(wrapper.state('title')).toEqual('');
        expect(wrapper.state('description')).toEqual('');
        expect(wrapper.state('visibility')).toEqual('Public');
        expect(wrapper.state('start')).toEqual(testConstants.dateTimeNow);
        expect(wrapper.state('entriesClose')).toEqual(testConstants.dateTimeAddOneDay);
        expect(wrapper.state('fulfillment')).toEqual(testConstants.dateTimeAddTwoDays);
        expect(wrapper.state('options')).toEqual([]);
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

    it('should call props save change when save is clicked', () => {
        const expectedArguments = {
            ownerId: testConstants.user0.id,
            title: 'competition 0',
            description: 'competition 0 description',
            visibility: 'Public',
            start: testConstants.dateTimeNow.getTime(),
            closing: testConstants.dateTimeAddOneDay.getTime(),
            fulfillment: testConstants.dateTimeAddTwoDays.getTime(),
            options: ['option1', 'option2'],
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
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

        expect(props.saveChange.mock.calls.length).toBe(1);
        expect(props.saveChange.mock.calls[0][0]).toEqual(expectedArguments);
    });

    it('should call props nav to home after save succeeded', () => {
        const { props, wrapper } = setup();
        wrapper.find('button').at(0).simulate('click', { preventDefault() { } });

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
