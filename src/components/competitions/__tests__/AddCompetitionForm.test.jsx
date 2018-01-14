import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DateTimePicker from './../../utilities/DateTimePicker';
import { AddCompetitionFormComponent } from './../AddCompetitionForm';

configure({ adapter: new Adapter() });

const setup = () => {
    const wrapper = shallow(<AddCompetitionFormComponent />);

    return {
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
        expect(wrapper.find(DateTimePicker).at(0)).toHaveLength(1);
        expect(wrapper.find('div').at(16).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(6).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(6).prop('htmlFor')).toBe('FulfillmentDate');
        expect(wrapper.find('label').at(6).text()).toBe('Fulfillment Date');
        expect(wrapper.find('div').at(17).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find(DateTimePicker).at(1)).toHaveLength(1);
        expect(wrapper.find('div').at(18).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('label').at(7).hasClass('col-lg-3 col-form-label form-control-label')).toBe(true);
        expect(wrapper.find('label').at(7).prop('htmlFor')).toBe('Options');
        expect(wrapper.find('label').at(7).text()).toBe('Options');
        expect(wrapper.find('div').at(19).hasClass('col-lg-9')).toBe(true);
        expect(wrapper.find('input').at(4).hasClass('form-control')).toBe(true);
        expect(wrapper.find('input').at(4).prop('type')).toBe('text');
        expect(wrapper.find('input').at(4).prop('id')).toBe('Options');
        expect(wrapper.find('input').at(4).prop('placeholder')).toBe('Option1,Option2');
    });
});
