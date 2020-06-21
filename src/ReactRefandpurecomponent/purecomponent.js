import React, { PureComponent } from "react";

class Purecomponent extends PureComponent {
  // Here we need to see the without state update  pure component does not re-render
  state = {
    title: "lifecycle",
  };

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <button onClick={() => this.setState({ title: "something value" })}>
          Change text
        </button>
      </div>
    );
  }
}
export default Purecomponent;
