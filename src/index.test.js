import {Counter} from '../src/counter';
import {shallow} from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

test('initial state of <Counter/>', () => {
    const counter = shallow(<Counter/>);
    const state = counter.state();
    expect(state.wish).toBe('něco super');
    expect(state.binding).toBe('což bude');
})