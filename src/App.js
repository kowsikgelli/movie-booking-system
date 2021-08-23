import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Navbar  from './components/Navbar';
import Bookings from './components/Booking/Bookings';
import Details from './components/Details';
import Default from './components/Default';
import MovieList from './components/MovieList';

import {Switch,Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MovieList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/bookings" component={Bookings}></Route>
          <Route component={Default}></Route>
        </Switch>
        
      </React.Fragment>
    );
  }
  
}

export default App;
