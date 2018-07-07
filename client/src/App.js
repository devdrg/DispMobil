import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container } from 'reactstrap';


import NavBar from './components/NavBar';
import MainBody from './components/MainBody';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Container>
          <NavBar />
          <MainBody />
          </Container>
      </div>
    );
  }
}

export default App;
