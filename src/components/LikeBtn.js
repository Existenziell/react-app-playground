import cx from 'classnames';
import { Component } from 'react';
import '../css/index.css';

export default class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      counter: 100
    };
    this.toggleLike = this.toggleLike.bind(this);
    this.fibonacci(4)
  }

  fibonacci(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result = result + i
    }
    return result
  }

  toggleLike() {
    this.setState(prevState => ({
      counter: this.state.liked ? prevState.counter - 1 : prevState.counter + 1
    }));
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  render() {
    var btnClass = cx({
      'like-button': true,
      'liked': this.state.liked,
    });

    return (
      <div className="experiment">
        <h2>LikeButton</h2>
        <button onClick={this.toggleLike} className={btnClass}>
          <span>Like</span>
          <span> | </span>
          <span className={`likes-counter`}>{this.state.counter}</span>
        </button>
      </div>
    )
  }
}
