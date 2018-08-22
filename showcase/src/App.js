import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import MainMenu from './components/Menu'
import Header from './components/Header'
import Members from './Members'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <MainMenu />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/members" component={Members} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
