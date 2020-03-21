import React from 'react';
import './App.css';
import Llamabar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/wrapper/wrapper';
import About from './pages/about/about';
import Adventures from './pages/adventures/adventures';
import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import NotFoundPage from './pages/notFoundPage/notFoundPage'





function App() {
  return (

    <div className="App">

      <Router>
        <Wrapper>
          <Llamabar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Adventures" component={Adventures} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Profile" component={Profile} />
            <Route component={NotFoundPage} />
          </Switch>
        </Wrapper>
      </Router>

    </div>

  );
}

export default App;
