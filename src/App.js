import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/ProductDetail';

const App = () =>{
 return(
   <React.Fragment>
     <Router> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/product/:id' component={Product} />
       </Switch>
      </Router>
   </React.Fragment>
 )
}

export default App;
