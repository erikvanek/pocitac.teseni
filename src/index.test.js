import { Counter } from '../src/counter'
import { shallow } from 'enzyme'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

test('initial state of <Counter/>', () => {
  const counter = shallow(<Counter />)
  const state = counter.state()
  expect(state.wish).toBe('něco super')
  expect(state.binding).toBe('což bude')
  // expect(state.items).toBe([])
})

// global.localStorage = {
//   getItem: () => undefined,
// };

test('filter passed items', () => {
  const lastSeptemmber = new Date(2019, 8, 30, 10, 0)
  const firstOctober = new Date(2019, 9, 1, 11, 0)
  const secondOctober = new Date(2019, 9, 2, 11, 0)
  const now = new Date(2019, 8, 30, 16, 0)
  const items = [lastSeptemmber, firstOctober, secondOctober].map(when => ({
    wish: 'random wish',
    when: when.toISOString()
  }))
  const counter = shallow(<Counter />)
  counter.setState({ items }).setState({now})
  const itemsState = counter.state('items')
  expect(itemsState.length).toBe(2)
})
