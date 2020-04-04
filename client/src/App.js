import React from 'react';
import './App.css';
import Llamabar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
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
import PrivateRoute from "./components/private-route/PrivateRoute";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

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
            <PrivateRoute exact path="/Adventures" component={Adventures} />
            <PrivateRoute exact path="/Profile" component={Profile} />
            <PrivateRoute exact path="/About" component={About} />
            <Route component={NotFoundPage} />
            </Switch>
        </Wrapper>
        </div>
      </Router>
      </Provider>

  );
}

export default App;