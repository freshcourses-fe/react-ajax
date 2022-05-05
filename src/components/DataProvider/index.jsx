import React, { Component } from 'react';

class DataProvider extends Component {
  state = {
    data: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { getData } = this.props;

    getData()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        this.setState({ error: e, isLoading: false });
      });
  };

  render() {
    const { render } = this.props;
    return render(this.state);
  }
}

export default DataProvider;
