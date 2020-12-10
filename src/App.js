import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, withRouter, BrowserRouter} from "react-router-dom";

import Nav from "./components/nav.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
<<<<<<< HEAD

function App() {
  return (
    <Router>
      <LandingNav />
      <br/>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
}
=======
import Welcome from "./components/landing.component";
import Match from "./components/match.component"

const Main = withRouter(({location}) =>{
  return<div>
    {
      location.pathname !== '/login' && location.pathname !== '/' && location.pathname !== '/register' && <Nav />
    }

      <Route exact path="/" component={Welcome}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/match" exact component={Match}/>
  </div>
})

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

>>>>>>> c97014a83ed408904d88d89c4d8958c588ce3d71

export default App;
