import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" ><News  pageSize={9} country="in"  /> </Route>
            <Route exact path="/business" ><News key="business" pageSize={9} country="in" category="business" /> </Route>
            <Route exact path="/entertainment" ><News key="entertainment" pageSize={9} country="in" category="entertainment" /> </Route>
            <Route exact path="/health"><News key="health" pageSize={9} country="in" category="health" /> </Route>
            <Route exact path="/science" ><News key="science" pageSize={9} country="in" category="science" /></Route>
            <Route exact path="/sports" ><News key="sports" pageSize={9} country="in" category="sports" /></Route>
            <Route exact path="/technology" ><News key="technology" pageSize={9} country="in" category="technology" /> </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
