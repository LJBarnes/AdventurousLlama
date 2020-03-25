import React from 'react';
import './App.css';
import Llamabar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/wrapper/wrapper';
import About from './pages/about/about';
import Adventures from './pages/adventures/adventures';
import Profile from './pages/profile/profile';
import NotFoundPage from './pages/notFoundPage/notFoundPage'
 import Register from './pages/auth/Register';
import Landing from './pages/landing page/Landing';
import Login from './pages/auth/Login';

import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (

    <Provider store={store}>
    <Router>
      <div className="App">
        <Wrapper>
          <Llamabar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Adventures" component={Adventures} />
            <Route exact path="/Profile" component={Profile} />
            <Route component={NotFoundPage} />
          </Switch>
        </Wrapper>
        </div>
      </Router>
      </Provider>

  );
}

export default App;