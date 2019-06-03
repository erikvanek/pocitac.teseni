// TODO switch from released version to master
// branch of formatjs project. It makes jest configuration
// quite painful tho
// import {format} from '../node_modules/timeago.js/src/format';
// yarn add timeago.js@hustcc/timeago.js#master

import { format } from 'timeago.js'
import React from 'react'
import Button from '@material-ui/core/Button'

import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const bindings = ['což bude', 'kterou uvidím', 'kterého uvidím', 'co se stane']
const storagePrefix = 'pleasure-counter-items'

const smallSize = '4rem'
const midSize = '12rem'
const bigSize = '16rem'

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wish: 'něco super',
      when: undefined,
      binding: bindings[0],
      selectedTab: 0,
      now: new Date().toISOString(),
      items: []
    }
  }

  componentDidMount = () => {
    const itemsFromStorage = localStorage.getItem(storagePrefix)
    if (itemsFromStorage && itemsFromStorage.length) {
      let items = JSON.parse(itemsFromStorage)

      items = items.map(item => ({
        ...item,
        remaining: format(item.when, 'en_US')
      }))
      this.setState({
        ...this.state,
        items: items.sort(this.sortFunction)
      })
    }
  }

  sortFunction = (a, b) => {
    return new Date(a.when).getTime() - new Date(b.when).getTime()
  }

  render = () => {
    const activeWishes = currentWishes(this.state.items, this.state.now).map(
      item => (
        <div key={item.timestamp}>
          {item.wish} {item.binding} {item.remaining}
        </div>
      )
    )

    const tabsStyle = { width: midSize }
    const buttonStyle = { width: midSize, height: smallSize }

    const passedWishes = oldWishes(this.state.items, this.state.now).map(
      item => (
        <div key={item.timestamp}>
          {item.wish} {item.binding} {item.remaining}
        </div>
      )
    )

    return (
      <div
        id='wishlist-counter-app'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1>Počítač těšení 🌈</h1>
        <div className='row'>
          <TextField
            value={this.state.wish}
            label='Těším se na'
            onChange={this.wishChanged}
            margin='normal'
            style={{ width: bigSize }}
            required
          />
        </div>
        <div className='row'>
          <TextField
            id='datetime-local'
            label='Což bude'
            type='datetime-local'
            defaultValue={this.state.when}
            onChange={this.dateChanged}
            style={{ width: bigSize }}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            disabled={!this.state.wish || !this.state.when}
            onClick={this.saveWish}
            variant='outlined'
            color='primary'
            style={buttonStyle}
          >
            Těšit se!
          </Button>
          <Button
            onClick={this.deleteAll}
            color='secondary'
            variant='outlined'
            style={buttonStyle}
          >
            Vše smazat
            <DeleteIcon />
          </Button>
        </div>

        <Tabs value={this.state.selectedTab} onChange={this.handleChange}>
          <Tab label='Na co se těším?' style={tabsStyle} />
          <Tab label='Archivní přání' style={tabsStyle} />
        </Tabs>

        {this.state.selectedTab === 0 && (
          <div className='row'>
            <h2>Na co už se těším?</h2>
            {activeWishes}
          </div>
        )}

        {this.state.selectedTab === 1 && (
          <div className='row'>
            <h2>Co už bylo?</h2>
            {passedWishes}
          </div>
        )}
      </div>
    )
  }

  handleChange = (_, selectedTab) => this.setState({ selectedTab: selectedTab })

  saveWish = () => {
    const newWish = {
      wish: this.state.wish,
      when: this.state.when,
      timestamp: new Date().getTime()
    }
    newWish.remaining = format(newWish.when, 'en_US')
    console.log(newWish)
    const withNewWish = [...this.state.items, newWish]

    localStorage.setItem(storagePrefix, JSON.stringify(withNewWish))

    this.wishChanged(undefined)
    this.dateChanged(undefined)
    this.setState({
      ...this.state,
      items: withNewWish.sort(this.sortFunction)
    })
  }

  deleteAll = () => {
    localStorage.removeItem(storagePrefix)
    this.setState({ ...this.state, items: [] })
  }

  wishChanged = wish => {
    this.setState({ ...this.state, wish: wish ? wish.target.value : undefined })
  }

  dateChanged = date => {
    this.setState({
      ...this.state,
      when: date ? new Date(date.target.value) : undefined
    })
  }
}

export const currentWishes = (wishes, now) =>
  wishes.filter(wish => wish.when > now)

export const oldWishes = (wishes, now) =>
  wishes.filter(wish => wish.when <= now)
