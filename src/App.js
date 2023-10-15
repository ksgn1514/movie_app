import React from "react";
import PropType from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    // 컴포넌트가 마운트 됐을때
    console.log("component rendered")
  }

  componentDidUpdate() {
    // 컴포넌트 업데이트 됐을때 -> setStates
    console.log("component updated")
  }

  componentWillUnmount() {
    // 컴포넌트 죽을때
    console.log("component unmount")
  }

  render() {
    console.log("render")
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
    </div>
  }
}

export default App;
