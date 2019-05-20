'use strict';

const e = React.createElement;

const bindings = ['což bude', 'kterou uvidím', 'kterého uvidím', 'co se stane'];

alert('yo')

class Counter extends React.Component {
    constructor(props) {
      alert('yo')
        super(props);
        this.state = {
            wish: 'Něco super',
            when: new Date(),
            binding: bindings[0]
        }
    }

    render() {
        return (
            <div id="wishlist-counter-app">
              <h1>Počítač těšení🌈</h1>
              <div className="row">
                Těším se na <input type="text" placeholder="this.state.wish"/>
              </div>
              <div className="row">
                což bude __DATUM__
              </div>
              <button>Těšit se!</button>
            </div>
          );
    }

}

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#app');
// ReactDOM.render(e(Counter), domContainer);

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);