import React, { Component } from 'react';
import './App.css';
import ApproveUserCard from './components/ApproveUserCard';
import { Container, Divider } from 'semantic-ui-react';
import MainMenu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <MainMenu/>
          <Header></Header>
          {/* <Header><h1>Free Code Camp Philly Showcase</h1></header> */}
          <Divider></Divider>
          <h3>Approve Users</h3>
          <ApproveUserCard/>
        </Container>
      </div>
    );
  }
}

export default App;
