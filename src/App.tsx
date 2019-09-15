import * as React from 'react';
import { Link,Switch,Route,BrowserRouter as Router, Redirect } from 'react-router-dom';
import HomePage from './components/Home-Page';
import AboutPage from './components/About-Page';
import AppNavbarPage from './shared/AppNavbar';

interface Istate{

}

export default class App extends React.Component<Istate>{

    render(){
       return(
         <Router>
            <Switch>
            <div className="App">
              <AppNavbarPage />
               <Route exact path="/home" component={HomePage} />
               <Route exact path="/about" component={AboutPage} />
               <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            </div>
            </Switch>
          </Router>
      )
    }
}