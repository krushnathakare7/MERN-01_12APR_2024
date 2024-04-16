import React from 'react';

/**
 * this = {state:null}
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState((prev, props) => ({ count: prev.count + props.diff }));
  };
  handleDecrement = () => {
    this.setState((prev, props) => ({ count: prev.count - props.diff }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+{this.props.diff}</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDecrement}>-{this.props.diff}</button>
      </div>
    );
  }
}

export default Counter;