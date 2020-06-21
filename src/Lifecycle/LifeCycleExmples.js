import React, { Component } from "react";

class LifeCycleExmples extends Component {
  state = {
    count: 1,
  };

  num = 1;

  constructor() {
    super();
    console.log("CounterApp.constructor called");
  }
  render() {
    console.log("CounterApp.render() called");
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>Value of count is {this.state.count}</p>
        <p>Value of num is {this.num}</p>

        <button
          className="btn btn-secondary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment count
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => {
            this.num++;
            this.forceUpdate();
          }}
        >
          Increment num
        </button>
      </div>
    );
  }
  static getDerivedStateFromProps() {
    console.log("CounterApp.getDerivedStateFromProps called");
    return null;
  }
  componentDidMount() {
    console.log("CounterApp.componentDidMount called");
  }
  componentWillUnmount() {
    console.log("CounterApp.componentWillUnmount called");
  }
  shouldComponentUpdate() {
    console.log("CounterApp.shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("CounterApp.getSnapshotBeforeUpdate called");
    return null;
  }
  componentDidUpdate() {
    console.log("CounterApp.componentDidUpdate called");
  }
}

export default LifeCycleExmples;
 