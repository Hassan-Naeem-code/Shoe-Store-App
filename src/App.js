import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () =>{
 return(
   <React.Fragment>
     {/* <Router>  
        <Header />
        <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/product/:id' component={Product} />
      <Route path='/Men' component={Men}></Route>
      <Route exact path ='/:id' component={Product}></Route>

      </Switch>
      </Router> */}
      <h1>Integrated React Router</h1>
   </React.Fragment>
 )
}

export default App;
