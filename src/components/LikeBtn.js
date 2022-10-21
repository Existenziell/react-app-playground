import cx from 'classnames'
import { Component } from 'react'

export default class LikeButton extends Component {
  constructor() {
    super()
    this.state = {
      liked: false,
      counter: 100
    }
    this.toggleLike = this.toggleLike.bind(this)
  }

  toggleLike() {
    this.setState(prevState => ({
      counter: this.state.liked ? prevState.counter - 1 : prevState.counter + 1
    }))
    this.setState(prevState => ({
      liked: !prevState.liked
    }))
  }

  render() {
    var btnClass = cx({
      'like-button': true,
      'liked': this.state.liked,
    })

    return (
      <div className="experiment">
        <h2>Good old vanilla Like Button</h2>
        <button onClick={this.toggleLike} className={btnClass}>
          <span>Like</span>
          <span> | </span>
          <span className={`likes-counter`}>{this.state.counter}</span>
        </button>
      </div>
    )
  }
}
