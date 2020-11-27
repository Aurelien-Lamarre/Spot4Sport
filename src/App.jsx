import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styled from "styled-components";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Team from "./Components/Team";

const Border = Styled.div`
  height: 0.1em;
  width: 100%;
  margin-top: 0;
  background: rgb(255,230,0);
  background: linear-gradient(315deg, rgba(255,230,0,1) 5%, 
  rgba(23,255,186,1) 24%, rgba(255,0,77,1) 52%,
   rgba(255,153,0,1) 69%);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navigation />
          <Border />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component={Team} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
