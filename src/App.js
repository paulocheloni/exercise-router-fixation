import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAcess from './StrictAcess';


class App extends Component {
  render() {
    const userName = 'João';
    const passWord = '1234';
    
    return (
      <div>        
        <BrowserRouter>
          <Switch>            
            <Route path="/users/:classID" render={
              (props) => 
              (< Users { ...props } greetingMessage={'Good Morning'} />) } />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="/StrictAcess/" render={(props) => <StrictAcess {...props} user={ {userName,passWord}} />  } />                  
          </Switch>
        </BrowserRouter>    
      </div>    
    );
  }
}

export default App;