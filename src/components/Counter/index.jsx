import React, { Component, PureComponent } from 'react';

class Counter extends PureComponent {
  state = {
    count: 0,
  };

  addHandler = () => {
    this.setState({ count: this.state.count + this.props.step });
  };
  subtractHandler = () => {
    this.setState({ count: this.state.count - this.props.step });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.step === this.props.step;
  // }

  handler = () => {
    this.setState({ count: this.state.count });
  };

  render() {
    console.log('render');
    const { count } = this.state;
    return (
      <div style={{ padding: '10px', border: '5px dotted black' }}>
        <p>Current count is : {count}</p>
        <button onClick={this.addHandler}>Add</button>
        <button onClick={this.subtractHandler}>Subtract</button>
        <button onClick={this.handler}>Rerender me</button>
      </div>
    );
  }
}

export default Counter;
