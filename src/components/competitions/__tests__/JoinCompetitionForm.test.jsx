import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as testConstants from './../../../__tests_constants__';

import { JoinCompetitionFormComponent } from './../JoinCompetitionForm';
import RadioButtons from './../../utilities/RadioButtons';
import PlusMinusButtonInput from './../../utilities/PlusMinusButtonInput';

import competitionEntriesDbAdapter from './../../../database/competitionEntriesDbAdapter';
import competitionParticipantsDbAdapter from './../../../database/competitionParticipantsDbAdapter';

configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        computedMatch: {
            params: {
                id: testConstants.competitionId0,
            },
        },
        competitions: testConstants.competitions,
        userId: testConstants.userId0,
        navToPath: jest.fn(),
    };

    const wrapper = shallow(<JoinCompetitionFormComponent {...props} />);

    return {
        props,
        wrapper,
    };
};

describe('join competition form component', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
        expect(wrapper.find('div').at(1).hasClass('jumbotron')).toBe(true);
        expect(wrapper.find('div').at(2).hasClass('card-outline-secondary')).toBe(true);
        expect(wrapper.find('div').at(3).hasClass('card-header mb-2')).toBe(true);
        expect(wrapper.find('div').at(4).hasClass('row')).toBe(true);
        expect(wrapper.find('h3').hasClass('col-9 text-left')).toBe(true);
        expect(wrapper.find('h3').text()).toBe(`${testConstants.competition0.title}Public`);
        expect(wrapper.find('span').at(0).hasClass('badge badge-success ml-2')).toBe(true);
        expect(wrapper.find('span').at(0).text()).toBe('Public');
        expect(wrapper.find('div').at(5).hasClass('col-3 card-outline-secondary text-right')).toBe(true);
        expect(wrapper.find('div').at(6).hasClass('card-block mb-2')).toBe(true);
        expect(wrapper.find('small').hasClass('card-text')).toBe(true);
        expect(wrapper.find('small').text()).toBe('Entries closing in');
        expect(wrapper.find('span').at(1).hasClass('card-header')).toBe(true);
        // TODO: the following span text will be dynamic
        expect(wrapper.find('span').at(1).text()).toBe('5 days');
        expect(wrapper.find('div').at(7).hasClass('card-block')).toBe(true);
        expect(wrapper.find('div').at(8).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('p').hasClass('col-lg-12')).toBe(true);
        expect(wrapper.find('p').text()).toBe(testConstants.competition0.description);
        expect(wrapper.find('div').at(9).hasClass('card-block text-left text-lg mb-2')).toBe(true);
        expect(wrapper.find(RadioButtons).prop('options')).toEqual(testConstants.competition0.options);
        expect(wrapper.find('div').at(10).hasClass('card-block row')).toBe(true);
        expect(wrapper.find(PlusMinusButtonInput).hasClass('col-2')).toBe(true);
        expect(wrapper.find(PlusMinusButtonInput).prop('initialValue')).toBe(1);
        expect(wrapper.find(PlusMinusButtonInput).prop('min')).toBe(1);
        expect(wrapper.find(PlusMinusButtonInput).prop('max')).toBe(5);
        expect(wrapper.find('form').hasClass('input-form')).toBe(true);
        expect(wrapper.find('div').at(11).hasClass('form-group row')).toBe(true);
        expect(wrapper.find('div').at(12).hasClass('col-lg-4 offset-lg-8 row')).toBe(true);
        expect(wrapper.find('button').at(0).hasClass('col-lg-6 form-control btn btn-primary')).toBe(true);
        expect(wrapper.find('button').at(0).text()).toBe('Save');
        expect(wrapper.find('button').at(0).prop('type')).toBe('submit');
        expect(wrapper.find('button').at(1).hasClass('col-lg-6 form-control btn btn-default')).toBe(true);
        expect(wrapper.find('button').at(1).text()).toBe('Cancel');
        expect(wrapper.find('button').at(1).prop('type')).toBe('button');
    });

    it('initial state', () => {
        const expectedInitialState = {
            options: undefined,
            value: 0,
        };
        const { wrapper } = setup();

        expect(wrapper.state()).toEqual(expectedInitialState);
    });

    it('should handle option change', () => {
        const { wrapper } = setup();

        wrapper.find(RadioButtons).props().onValueChanged({
            value: 'option1',
        });

        expect(wrapper.state('option')).toBe('option1');
    });

    it('should handle value change', () => {
        const { wrapper } = setup();

        wrapper.find(PlusMinusButtonInput).props().onValueChanged({
            value: 3,
        });

        expect(wrapper.state('value')).toBe(3);
    });

    it('should handle submit', () => {
        const { props, wrapper } = setup();

        const spyCompetitionEntries = jest.spyOn(competitionEntriesDbAdapter, 'addCompetitionEntryToDb')
            .mockImplementation(() =>
                new Promise((resolve) => {
                    resolve();
                }));
        const spyCompetitionParticipants = jest.spyOn(competitionParticipantsDbAdapter, 'addCompetitionParticipantToDb')
            .mockImplementation(() =>
                new Promise((resolve) => {
                    resolve();
                }));

        wrapper.setState({
            option: testConstants.competition0.options[0],
            value: 3,
        });
        wrapper.find('form').at(0).simulate('submit', { preventDefault() { } });

        expect(spyCompetitionEntries).toHaveBeenCalledWith(
            testConstants.competitionId0,
            {
                userId: testConstants.userId0,
                option: testConstants.competition0.options[0],
                value: 3,
                entryCreated: testConstants.dateTimeNowInNumber,
                entryLastModified: testConstants.dateTimeNowInNumber,
            },
        );
        expect(spyCompetitionParticipants).toHaveBeenCalledWith(
            testConstants.competitionId0,
            testConstants.userId0,
        );
        expect(props.navToPath.mock.calls.length).toBe(1);
        expect(props.navToPath.mock.calls[0][0]).toBe('/');
    });
});
