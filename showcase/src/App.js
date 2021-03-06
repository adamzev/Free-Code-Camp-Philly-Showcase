import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import MainMenu from './components/Menu'
import Members from './Members'
import FCCHeader from './components/FCCHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainMenu />
            <FCCHeader />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={About} />
            <Route path="/members" component={Members} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
