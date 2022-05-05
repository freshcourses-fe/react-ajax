import React, { Component } from 'react';
import Counter from '../../components/Counter';

class CounterPage extends Component {
  state = {
    step: 1,
  };

  handleChange = (e) => {
    this.setState({
      step: Number(e.target.value),
    });
  };

  render() {
    return (
      <main style={{ padding: '20px', border: '5px solid green' }}>
        <p>Current step: {this.state.step}</p>
        <input
          type="range"
          min={1}
          max={100}
          onChange={this.handleChange}
          value={this.state.step}
        />
        <Counter step={this.state.step} />
      </main>
    );
  }
}

export default CounterPage;
