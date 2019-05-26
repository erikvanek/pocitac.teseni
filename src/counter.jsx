
import { format } from "timeago.js";
import React from 'react';

const bindings = ["což bude", "kterou uvidím", "kterého uvidím", "co se stane"];
const storagePrefix = "pleasure-counter-items";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wish: "něco super",
      when: undefined,
      binding: bindings[0],
      now: new Date().toISOString(),
      items: []
    };
  }

  componentDidMount = () => {
    const itemsFromStorage = localStorage.getItem(storagePrefix);
    if (itemsFromStorage && itemsFromStorage.length) {
      let items = JSON.parse(itemsFromStorage);

      items = items.map(item => ({
        ...item,
        remaining: format(item.when, "en_US")
      }));
      this.setState({
        ...this.state,
        items: items.sort(this.sortFunction)
      });
    }
  };

  sortFunction = (a, b) => {
    return new Date(a.when).getTime() - new Date(b.when).getTime();
  };

  render = () => {
    const items = this.state.items.map(item => (
      <div key={item.timestamp}>
        {item.wish} {item.binding} {item.remaining}
      </div>
    ));
    return (
      <div id="wishlist-counter-app" style={{display: 'flex', 
        'flexDirection': 'column',
        'alignItems': 'center'}}>
        <h1>Počítač těšení 🌈</h1>
        <div className="row">
          Těším se na{" "}
          <input
            type="text"
            placeholder="něco super"
            onChange={this.wishChanged}
          />
        </div>
        <div className="row">
          což bude{" "}
          <input
            type="datetime-local"
            min={this.now}
            onChange={this.dateChanged}
            required
          />
        </div>
        <div style={{display: 'flex'}}>
          <button disabled={!this.state.wish || !this.state.when} onClick={this.saveWish} >
            Těšit se!
          </button>
          <button onClick={this.deleteAll}>Vše smazat</button>
        </div>

        <div className="row">
          <h2>Na co už se těším?</h2>
          {items}
        </div>
      </div>
    );
  };

  saveWish = () => {
    const newWish = {
      wish: this.state.wish,
      when: this.state.when,
      timestamp: new Date().getTime()
    };
    newWish.remaining = format(newWish.when, "en_US");
    console.log(newWish);
    const withNewWish = [...this.state.items, newWish];

    localStorage.setItem(storagePrefix, JSON.stringify(withNewWish));

    this.wishChanged(undefined);
    this.dateChanged(undefined);
    this.setState({
      ...this.state,
      items: withNewWish.sort(this.sortFunction)
    });
  };

  deleteAll = () => {
    localStorage.removeItem(storagePrefix);
    this.setState({ ...this.state, items: [] });
  };

  wishChanged = wish => {
    this.setState({ ...this.state, wish: wish ? wish.target.value : undefined });
  };

  dateChanged = date => {
    this.setState({ ...this.state, when: date ? new Date(date.target.value) : undefined });
  };
}