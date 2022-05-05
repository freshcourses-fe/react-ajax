import React, { Component } from 'react';

class LaptopsLoader extends Component {
  state = {
    laptops: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    fetch('/notebooks.json')
      .then((response) => response.json())
      .then((laptops) => {
        this.setState({ laptops, isLoading: false });
      })
      .catch((e) => {
        this.setState({ error: e, isLoading: false });
      });
  }

  render() {
    const { laptops, error, isLoading } = this.state;
    return (
      <div>
        {isLoading && <div>LOADING...</div>}
        {error && <div>ERROR</div>}
        {laptops.map((laptop) => (
          <div key={laptop.id}>{JSON.stringify(laptop)}</div>
        ))}
      </div>
    );
  }
}

export default LaptopsLoader;
