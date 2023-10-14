import React from "react";

function Food({fav}) {
  return <h3>I like {fav}</h3>;
}
// function Food(props) {
//   const fav = props.fav;
//   return <h3>I like {fav}</h3>;
// }

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />

    </div>
  );
}

export default App;
