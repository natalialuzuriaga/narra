import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import LandingNav from "./components/landing-nav.component"
import Login from "./components/login.component";
import Register from "./components/register.component";

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

export default App;
