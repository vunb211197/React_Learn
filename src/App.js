import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Nav from './Nav';
import Portfolio from "./Portfolio";

class App extends React.Component{
  onClickMe(text) {
    alert(text);
  }
  render() {
      return (
          <div>
              <Nav />
              <Header />
              <Portfolio />
          </div>
      );
  }
}
export default App;
