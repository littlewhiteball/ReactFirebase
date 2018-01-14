import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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
    });
});
