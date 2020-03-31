import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./counterActions";

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <div className="buttons">
            <button onClick={this.decrement}>-</button>
            <span className="count">{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.reducer.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
